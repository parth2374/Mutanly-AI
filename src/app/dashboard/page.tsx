"use client";

import { Loader, Search, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import GeneViewer from "~/components/gene-viewer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  type ChromosomeFromSeach,
  type GeneFromSearch,
  type GenomeAssemblyFromSearch,
  getAvailableGenomes,
  getGenomeChromosomes,
  searchGenes,
} from "~/utils/genome-api";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

type Mode = "browse" | "search";

function GeneRoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    primary: "bg-red-100 text-red-700",
    modifier: "bg-yellow-100 text-yellow-700",
    pathway: "bg-blue-100 text-blue-700",
    pseudo: "bg-gray-100 text-gray-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[role]}`}>
      {role}
    </span>
  );
}

export default function Dashboard() {
  const [genomes, setGenomes] = useState<GenomeAssemblyFromSearch[]>([]);
  const [selectedGenome, setSelectedGenome] = useState<string>("hg38");
  const [chromosomes, setChromosomes] = useState<ChromosomeFromSeach[]>([]);
  const [selectedChromosome, setSelectedChromosome] = useState<string>("chr1");
  const [selectedGene, setSelectedGene] = useState<GeneFromSearch | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<GeneFromSearch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [geneTooltip, setGeneTooltip] = useState<Record<string, string>>({});
  const [primaryGene, setPrimaryGene] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("search");
  const router = useRouter()

  const species = "Human";

  const fetchGeneExplanation = async (symbol: string) => {
    if (geneTooltip[symbol]) return;

    try {
      console.log("Fetching tooltip for:", symbol);

      const res = await fetch("/api/gene-tooltip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gene: symbol }),
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();

      console.log("Tooltip response:", data);

      const explanation =
        data?.explanation ||
        "Gene involved in important biological processes.";

      setGeneTooltip((prev) => ({
        ...prev,
        [symbol]: explanation,
      }));
    } catch (error) {
      console.error("Tooltip error:", error);

      setGeneTooltip((prev) => ({
        ...prev,
        [symbol]: "Gene involved in important biological processes.",
      }));
    }
  };

  useEffect(() => {
    const fetchGenomes = async () => {
      try {
        setIsLoading(true);
        const data = await getAvailableGenomes();
        if (data?.genomes && data?.genomes?.[species]) {
          setGenomes(data?.genomes?.[species]);
        }
      } catch (err) {
        setError("Failed to load genome data");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGenomes();
  }, []);

  useEffect(() => {
    const fetchChromosomes = async () => {
      try {
        setIsLoading(true);
        const data = await getGenomeChromosomes(selectedGenome);
        setChromosomes(data?.chromosomes);
        console.log(data?.chromosomes);
        if (data?.chromosomes.length > 0) {
          setSelectedChromosome(data?.chromosomes[0]!.name);
        }
      } catch (err) {
        setError("Failed to load chromosome data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchChromosomes();
  }, [selectedGenome]);

  const performGeneSearch = async (
    query: string,
    genome: string,
    filterFn?: (gene: GeneFromSearch) => boolean,
  ) => {
    try {
      setIsLoading(true);
      const data = await searchGenes(query, genome);
      const results = filterFn ? data?.results.filter(filterFn) : data?.results;

      setSearchResults(results || []);
      setPrimaryGene(results && results.length > 0 ? (results[0]?.symbol ?? null) : null);
    } catch (err) {
      setError("Faield to search genes");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedChromosome || mode !== "browse") return;
    performGeneSearch(
      selectedChromosome,
      selectedGenome,
      (gene: GeneFromSearch) => gene.chrom === selectedChromosome,
    );
  }, [selectedChromosome, selectedGenome, mode]);

  const handleGenomeChange = (value: string) => {
    setSelectedGenome(value);
    setSearchResults([]);
    setSelectedGene(null);
  };

  const switchMode = (newMode: Mode) => {
    if (newMode === mode) return;

    setSearchResults([]);
    setSelectedGene(null);
    setError(null);

    if (newMode === "browse" && selectedChromosome) {
      performGeneSearch(
        selectedChromosome,
        selectedGenome,
        (gene: GeneFromSearch) => gene.chrom === selectedChromosome,
      );
    }

    setMode(newMode);
  };

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    performGeneSearch(searchQuery, selectedGenome);
  };

  const loadBRCA1Example = () => {
    setMode("search");
    setSearchQuery("BRCA1");
    performGeneSearch("BRCA1", selectedGenome);
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="min-h-screen bg-[#e9eeea]">
      <header className="sticky  backdrop-blur-md top-0 z-50 border-b border-[#3c4f3d]/10 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={'/Logo.png'}
              alt="Logo"
              height={42}
              width={42}
              className="cursor-pointer mr-3"
              onClick={() => router.push('/')}
            />
            <div className="relative">
              <h1 className="text-xl font-light tracking-wide text-[#3c4f3d]">
                <span className="font-normal">EVO</span>
                <span className="text-[#de8246]">2</span>
              </h1>
              <div className="absolute -bottom-1 left-0 h-[2px] w-12 bg-[#de8246]"></div>
            </div>
            <span className="text-sm font-light text-[#3c4f3d]/70">
              Variant Analysis
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6">
        {selectedGene ? (
          <GeneViewer
            gene={selectedGene}
            genomeId={selectedGenome}
            onClose={() => setSelectedGene(null)}
          />
        ) : (
          <>
            <Card className="mb-6 gap-0 border-none bg-white py-0 shadow-sm">
              <CardHeader className="pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-normal text-[#3c4f3d]/70">
                    Genome Assembly
                  </CardTitle>
                  <div className="text-xs text-[#3c4f3d]/60">
                    Organism: <span className="font-medium">Human</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <Select
                  value={selectedGenome}
                  onValueChange={handleGenomeChange}
                  disabled={isLoading}
                >
                  <SelectTrigger className="h-9 w-full border-[#3c4f3d]/10">
                    <SelectValue placeholder="Select genome assembly" />
                  </SelectTrigger>

                  <SelectContent>
                    {genomes.map((genome) => (
                      <SelectItem key={genome.id} value={genome.id}>
                        <div className="flex w-full items-center justify-between">
                          <span>
                            {genome.id} - {genome.name}
                            {genome.active ? " (active)" : ""}
                          </span>

                          {genome.id === "hg38" && (
                            <span className="text-xs ms-2 text-green-600 font-medium">
                              Latest (recommended)
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedGenome && (
                  <p className="mt-2 text-xs text-[#3c4f3d]/60">
                    {
                      genomes.find((genome) => genome.id === selectedGenome)?.sourceName
                    }
                  </p>
                )}

                {/* Genome assembly explanation */}
                <div className="mt-3 rounded-md bg-[#f6f8f6] p-3 text-xs leading-relaxed text-[#3c4f3d]/70">
                  <p>
                    <span className="font-medium">Genome Assembly:</span> A genome assembly is a reference version of the DNA sequence used to compare and study genetic variants.
                  </p>

                  <p className="mt-1">
                    For human analysis,{" "}
                    <span className="font-semibold text-[#3c4f3d]">hg38 (GRCh38)</span> is the latest and most commonly used reference genome, so it is <span className="font-semibold text-[#3c4f3d]">recommended</span> for most analyses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="mt-6 gap-0 border-none bg-white py-0 shadow-sm">
              <CardHeader className="pt-4 pb-2">
                <CardTitle className="text-sm font-normal text-[#3c4f3d]/70">
                  Browse
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <Tabs
                  value={mode}
                  onValueChange={(value) => switchMode(value as Mode)}
                >
                  <TabsList className="mb-4 -ml-4 md:ml-0 bg-[#e9eeea]">
                    <TabsTrigger
                      className="data-[state=active]:bg-white data-[state=active]:text-[#3c4f3d]"
                      value="search"
                    >
                      Search Genes
                    </TabsTrigger>
                    <TabsTrigger
                      className="data-[state=active]:bg-white data-[state=active]:text-[#3c4f3d]"
                      value="browse"
                    >
                      Browse Chromosomes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="search" className="mt-0">
                    <div className="space-y-4">
                      <form
                        onSubmit={handleSearch}
                        className="flex flex-col gap-3 sm:flex-row"
                      >
                        <div className="relative flex-1">
                          <Input
                            type="text"
                            placeholder="Enter gene symbol or name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-9 border-[#3c4f3d]/10 pr-10"
                          />
                          <Button
                            type="submit"
                            className="absolute top-0 right-0 h-full cursor-pointer rounded-l-none bg-[#3c4f3d] text-white hover:bg-[#3c4f3d]/90"
                            size="icon"
                            disabled={isLoading || !searchQuery.trim()}
                          >
                            <Search className="h-4 w-4" />
                            <span className="sr-only">Search</span>
                          </Button>
                        </div>
                      </form>
                      <Button
                        variant="link"
                        className="h-auto cursor-pointer p-0 text-[#de8246] hover:text-[#de8246]/80"
                        onClick={loadBRCA1Example}
                      >
                        Try BRCA1 example
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="browse" className="mt-0">
                    <div className="max-h-[150px] overflow-y-auto pr-1">
                      <div className="flex flex-wrap gap-2">
                        {chromosomes.map((chrom) => (
                          <Button
                            key={chrom.name}
                            variant="outline"
                            size="sm"
                            className={`h-8 cursor-pointer border-[#3c4f3d]/10 hover:bg-[#e9eeea] hover:text-[#3c4f3d] ${selectedChromosome === chrom.name ? "text[#3c4f3d] bg-[#e9eeea]" : ""}`}
                            onClick={() => setSelectedChromosome(chrom.name)}
                          >
                            {chrom.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {isLoading && (
                  <div className="flex justify-center py-4">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#3c4f3d]/30 border-t-[#de8243]"></div>
                  </div>
                )}

                {error && (
                  <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {searchResults.length > 0 && !isLoading && (
                  <div className="mt-6">
                    <div className="mb-2">
                      <h4 className="text-xs font-normal text-[#3c4f3d]/70">
                        {mode === "search" ? (
                          <>
                            Search Results:{" "}
                            <span className="font-medium text-[#3c4f3d]">
                              {searchResults.length} genes
                            </span>
                          </>
                        ) : (
                          <>
                            Genes on {selectedChromosome}:{" "}
                            <span className="font-medium text-[#3c4f3d]">
                              {searchResults.length} found
                            </span>
                          </>
                        )}
                      </h4>
                    </div>

                    <div className="overflow-hidden rounded-md border border-[#3c4f3d]/5">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-[#e9eeea]/50 hover:bg-[e9eeea]/70">
                            <TableHead className="text-xs font-normal text-[#3c4f3d]/70">
                              Symbol
                            </TableHead>
                            <TableHead className="text-xs font-normal text-[#3c4f3d]/70">
                              Name
                            </TableHead>
                            <TableHead className="text-xs font-normal text-[#3c4f3d]/70">
                              Location
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {searchResults.map((gene, index) => (
                            <TableRow
                              key={`${gene.symbol}-${index}`}
                              className="cursor-pointer border-b border-[#3c4f3d]/5 hover:bg-[#e9eeea]/50"
                              onClick={() => setSelectedGene(gene)}
                            >
                              <TableCell className="py-2 font-medium text-[#3c4f3d]">
                                {gene.symbol}
                              </TableCell>
                              <TableCell className="py-2 font-medium text-[#3c4f3d]">
                                {gene.name}
                              </TableCell>
                              <TableCell className="py-2 font-medium text-[#3c4f3d]">
                                {gene.chrom}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}

                {!isLoading && !error && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative flex h-64 mt-10 w-full items-center justify-center"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
                    />
                    <div className="relative z-10 flex max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/70 p-7 text-center shadow-2xl backdrop-blur-xl dark:bg-gray-900/70">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl"
                      >
                        <Search className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        {mode === "search"
                          ? "Start Your Search"
                          : selectedChromosome
                            ? "No Genes Found"
                            : "Choose a Chromosome"}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-xs leading-relaxed text-gray-500 dark:text-gray-400"
                      >
                        {mode === "search"
                          ? "Enter a gene name or symbol above to explore genomic insights."
                          : selectedChromosome
                            ? "This chromosome does not contain any indexed genes."
                            : "Select a chromosome to view available genes."}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card> */}
            <Card className="border-none bg-white shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#3c4f3d]">
                  Gene Search
                </CardTitle>

                <p className="text-xs text-[#3c4f3d]/60">
                  Search for a disease, gene name, or biological term to discover related genes.
                </p>
              </CardHeader>

              <CardContent>

                {/* SEARCH INPUT */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Search gene or disease..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-[#3c4f3d]/10"
                  />

                  <Button
                    className="bg-[#3c4f3d] cursor-pointer text-white hover:bg-[#2f3f30]"
                    onClick={handleSearch}
                  >
                    <SearchIcon />
                  </Button>
                </div>


                {/* EXAMPLE SEARCHES */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">

                  <span className="text-[#3c4f3d]/60">Examples:</span>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setSearchQuery("BRCA1")}
                  >
                    Try BRCA1
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setSearchQuery("breast cancer")}
                  >
                    Breast Cancer
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setSearchQuery("cystic fibrosis")}
                  >
                    Cystic Fibrosis
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => setSearchQuery("diabetes")}
                  >
                    Diabetes
                  </Button>
                </div>


                {/* BEGINNER GUIDE */}
                <div className="mt-3 rounded-md bg-[#f6f8f6] p-3 text-xs text-[#3c4f3d]/70">
                  <p>
                    <span className="font-medium">Tip:</span> Diseases may be linked to many genes.
                    If you're unsure which gene to choose, start with well-known genes like{" "}
                    <span className="font-semibold text-[#3c4f3d]">INS</span> (insulin gene for diabetes)
                    or <span className="font-semibold text-[#3c4f3d]">BRCA1</span> (breast cancer gene).
                  </p>
                </div>


                {/* SEARCH RESULTS */}
                {searchResults.length > 0 && (
                  <div className="mt-4">

                    <div className="mb-2 text-xs text-[#3c4f3d]/60">
                      Search Results: {searchResults.length} genes
                    </div>

                    <div className="overflow-hidden rounded-md border border-[#3c4f3d]/10">
                      <table className="w-full text-xs">

                        <thead className="bg-[#f6f8f6] text-left">
                          <tr>
                            <th className="p-2">Symbol</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Location</th>
                          </tr>
                        </thead>

                        <tbody>
                          {searchResults.map((gene, i) => (
                            <tr
                              key={i}
                              className="cursor-pointer border-t border-[#3c4f3d]/10 hover:bg-[#fafafa]"
                              onClick={() => setSelectedGene(gene)}
                            >

                              {/* SYMBOL WITH TOOLTIP */}
                              <td className="p-2 font-medium text-[#3c4f3d]">

                                <TooltipProvider>
                                  <Tooltip>

                                    <TooltipTrigger
                                      className="cursor-help"
                                      onMouseEnter={() => fetchGeneExplanation(gene.symbol)}
                                    >
                                      {gene.symbol}
                                    </TooltipTrigger>

                                    <TooltipContent className="max-w-[250px] text-xs">

                                      {geneTooltip[gene.symbol] ? (
                                        <p>{geneTooltip[gene.symbol]}</p>
                                      ) : (
                                        <p>Generating explanation...</p>
                                      )}

                                    </TooltipContent>

                                  </Tooltip>
                                </TooltipProvider>

                                {gene.symbol === primaryGene && (
                                  <span className="px-2 ms-3 py-1 rounded bg-red-100 text-red-700 text-xs font-medium">
                                    Main
                                  </span>
                                )}

                              </td>

                              <td className="p-2 text-[#3c4f3d]/70">
                                {gene.name || "-"}
                              </td>

                              <td className="p-2 text-[#3c4f3d]/70">
                                {gene.chrom || "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>
                  </div>
                )}

                {!isLoading && !error && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative flex h-64 mt-10 w-full items-center justify-center"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
                    />
                    <div className="relative z-10 flex max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/70 p-7 text-center shadow-2xl backdrop-blur-xl dark:bg-gray-900/70">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl"
                      >
                        <Search className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mb-1 text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        {mode === "search"
                          ? "Start Your Search"
                          : selectedChromosome
                            ? "No Genes Found"
                            : "Choose a Chromosome"}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-xs leading-relaxed text-gray-500 dark:text-gray-400"
                      >
                        {mode === "search"
                          ? "Enter a gene name or symbol above to explore genomic insights."
                          : selectedChromosome
                            ? "This chromosome does not contain any indexed genes."
                            : "Select a chromosome to view available genes."}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}