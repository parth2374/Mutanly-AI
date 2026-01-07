// 'use client'

// import { motion } from 'framer-motion'

// export default function Contact() {
//   return (
//     <main className="min-h-screen bg-[#fbf7e6] px-6 py-28 text-[#2f3a2e]">
//       <div className="mx-auto max-w-4xl">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mb-20 text-center"
//         >
//           <p className="text-xs uppercase tracking-[0.3em] text-[#8a9b7c]">
//             Contact
//           </p>
//           <h1 className="mt-6 font-serif text-4xl md:text-5xl">
//             Let’s Talk Genomics
//           </h1>
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//           className="grid gap-16 md:grid-cols-2"
//         >
//           {/* Left */}
//           <div className="space-y-6">
//             <p className="font-serif text-xl leading-relaxed">
//               Whether you’re exploring variant interpretation, evaluating Mutanly AI for research use, or interested in collaboration we’d love to hear from you.
//             </p>

//             <div className="text-sm text-[#4a5e4d] space-y-2">
//               <p>Email</p>
//               <p className="font-medium text-[#2f3a2e]">
//                 parthbansal2374@gmail.com
//               </p>
//             </div>
//           </div>

//           {/* Right Form */}
//           <form className="space-y-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
//             />

//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
//             />

//             <motion.button
//               whileHover={{ y: -2 }}
//               transition={{ duration: 0.3 }}
//               className="inline-block border border-[#2f3a2e] px-8 py-3 text-xs uppercase tracking-[0.3em]"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </main>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoLink = `mailto:parthbansal2374@gmail.com
    ?subject=Mutanly AI Contact
    &body=Name: ${encodeURIComponent(name)}
    %0AEmail: ${encodeURIComponent(email)}
    %0A%0AMessage:%0A${encodeURIComponent(message)}`

  return (
    <main className="min-h-screen bg-[#fbf7e6] px-6 py-28 text-[#2f3a2e]">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a9b7c]">
            Contact
          </p>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl">
            Let’s Talk Genomics
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid gap-16 md:grid-cols-2"
        >
          {/* Left */}
          <div className="space-y-6">
            <p className="font-serif text-xl leading-relaxed">
              Whether you’re exploring variant interpretation, evaluating Mutanly AI for research use, or interested in collaboration we’d love to hear from you.
            </p>

            <div className="text-sm text-[#4a5e4d] space-y-2">
              <p>Email</p>
              <p className="font-medium text-[#2f3a2e]">
                parthbansal2374@gmail.com
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailtoLink
            }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
            />

            <textarea
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-[#cfd7c5] bg-transparent px-4 py-3 text-sm outline-none focus:border-[#a8611c]"
            />

            <motion.button
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="inline-block border border-[#2f3a2e] px-8 py-3 cursor-pointer text-xs uppercase tracking-[0.3em]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}