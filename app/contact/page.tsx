export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-xs text-muted font-mono">04</span>
        <h2 className="font-display font-bold text-4xl">Contact</h2>
      </div>
      <hr className="border-border mb-8" />

      <p className="text-muted text-sm mb-8 leading-relaxed">
        Feel free to reach out!
      </p>

      <form
        action="https://formspree.io/f/mldbaqqd"
        method="POST"
        className="space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-muted mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#111] transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-muted mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#111] transition-colors"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-muted mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#111] transition-colors resize-none"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[#111] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs text-muted mb-4 uppercase tracking-widest font-semibold">Or reach out directly</p>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:affiqmohammed23@gmail.com"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            affiqem@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/affiq-mohammed-920bb0201/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            linkedin
          </a>
          <a
            href="https://github.com/affiq23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:opacity-60 transition-opacity"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
}