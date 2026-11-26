"use client";
import { useState, type FormEvent } from "react";
import { site, serviceNames } from "@/lib/site";

const field = "w-full border border-chalk/40 bg-paper px-4 py-3 text-ink placeholder:text-steel";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceNames[0]);
  const [details, setDetails] = useState("");

  function send(e: FormEvent) {
    e.preventDefault();
    const text = `Hello SG Wurld, my name is ${name}. I need: ${service}. ${details}`.trim();
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={send} className="space-y-4">
      <label className="block">
        <span className="mb-1 block text-sm text-chalk">Your name</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Full name" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm text-chalk">Service</span>
        <select value={service} onChange={(e) => setService(e.target.value)} className={field}>
          {serviceNames.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className="block">
        <span className="mb-1 block text-sm text-chalk">Project details</span>
        <textarea rows={4} value={details} onChange={(e) => setDetails(e.target.value)} className={field} placeholder="Location, size, timeline" />
      </label>
      <button type="submit" className="w-full bg-hivis px-6 py-3 font-bold text-ink">Send on WhatsApp</button>
    </form>
  );
}
