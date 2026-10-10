import { site } from './site';
import type { upcoming } from './library';

type Appearance = (typeof upcoming)[number];
export const eventSchema = (event: Appearance) => ({
  '@context': 'https://schema.org', '@type': 'Event',
  '@id': `${site.domain}/events/${event.slug}/#event`,
  name: event.title, description: event.description,
  startDate: event.presentationStart ?? event.startDate,
  endDate: event.presentationEnd ?? event.endDate,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  url: `${site.domain}/events/${event.slug}/`,
  image: `${site.domain}${event.image}`,
  location: { '@type':'Place', name:event.venue, address:{ '@type':'PostalAddress', addressLocality:event.city, addressCountry:event.countryCode } },
  organizer: event.organizer ? { '@type':'Organization', name:event.organizer, url:event.conferenceUrl } : undefined,
  performer: { '@type':'Person', '@id':`${site.domain}/#person`, name:site.name, url:site.domain },
  about: [{ '@type':'ScholarlyArticle', name:event.paperTitle, url:`${site.domain}${event.researchUrl}/` }, ...(event.additionalPapers ?? []).map(paper => ({ '@type':'ScholarlyArticle', name:paper.title, url:`${site.domain}${paper.researchUrl}/` }))]
});
