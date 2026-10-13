import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function WhatsAppFloat() {
  const digits = siteConfig.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;

  return (
    <a
      href={`https://wa.me/${digits}`}
      target="_blank"
      rel="noopener noreferrer"
      className="zv-whatsapp-float"
      aria-label="Chat with Zelvori on WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
      <span className="zv-whatsapp-float__label">Chat on WhatsApp</span>
    </a>
  );
}
