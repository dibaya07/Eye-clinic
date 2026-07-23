import { social } from '@/data/doctorData'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import React from 'react'

export default function SocialLinks() {
  return (
      <div className="mt-10 lg:mt-0">
                  <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-3">
                    Follow Clinical Updates
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                      aria-label="Facebook Page"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                      aria-label="Twitter Feed"
                    >
                      <X className="w-4 h-4" />
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-slate-500 hover:text-medical-700 hover:border-medical-600 hover:shadow-sm transition"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
  )
}
