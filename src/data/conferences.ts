import type { Publication } from './library';

export type Conference = { name: string; shortName: string; city: string; country: string; countryCode: string; url: string };
// Locations checked 3 October 2026 against organizer or institutional records.
const conferences: Record<string, Conference> = {
  'VTC-2027': { name:'2027 IEEE Vehicular Technology Conference (VTC2027-Spring)', shortName:'IEEE VTC 2027-Spring', city:'Hamburg', country:'Germany', countryCode:'DE', url:'https://events.vtsociety.org/vtc2027-spring/' },
  'ICC-2027': { name:'2027 IEEE International Conference on Communications (ICC)', shortName:'IEEE ICC 2027', city:'Washington, D.C.', country:'United States', countryCode:'US', url:'https://www.comsoc.org/conferences-events/ieee-international-conference-communications-2027' },
  'ICC-2026': { name:'2026 IEEE International Conference on Communications (ICC)', shortName:'IEEE ICC 2026', city:'Glasgow', country:'United Kingdom', countryCode:'GB', url:'https://www.comsoc.org/conferences-events/portfolio-conferences-events/conferences-events-history' },
  'WCNC-2026': { name:'2026 IEEE Wireless Communications and Networking Conference (WCNC)', shortName:'IEEE WCNC 2026', city:'Kuala Lumpur', country:'Malaysia', countryCode:'MY', url:'https://wcnc2026.ieee-wcnc.org/hotel-travel' },
  'ICMLCN-2026': { name:'2026 IEEE International Conference on Machine Learning for Communication and Networking (ICMLCN)', shortName:'IEEE ICMLCN 2026', city:'Abu Dhabi', country:'United Arab Emirates', countryCode:'AE', url:'https://www.comsoc.org/conferences-events/ieee-international-conference-machine-learning-communication-and-networking-2026' },
  'ICUFN-2026': { name:'2026 International Conference on Ubiquitous and Future Networks (ICUFN)', shortName:'IEEE ICUFN 2026', city:'Milan', country:'Italy', countryCode:'IT', url:'https://icufn.org/travel_venue' },
  'ICETES-2026': { name:'2026 International Conference on Emerging Technologies and Engineering Systems (ICETES)', shortName:'IEEE ICETES 2026', city:'Amman', country:'Jordan', countryCode:'JO', url:'https://www.ammanu.edu.jo/international-conference-on-emerging-technologies-and-engineering-systems/' },
  'ICEE-2023': { name:'2023 31st International Conference on Electrical Engineering (ICEE)', shortName:'IEEE ICEE 2023', city:'Tehran', country:'Iran', countryCode:'IR', url:'https://doi.org/10.1109/ICEE59167.2023.10334716' },
  'WASOWC-2022': { name:'2022 4th West Asian Symposium on Optical and Millimeter-wave Wireless Communications (WASOWC)', shortName:'IEEE WASOWC 2022', city:'Tabriz', country:'Iran', countryCode:'IR', url:'https://doi.org/10.1109/WASOWC54657.2022.9798419' },
  'MENACOMM-2026': { name:'2026 6th Middle East and North Africa Communications Conference (MENACOMM)', shortName:'IEEE MENACOMM 2026', city:'Hammamet', country:'Tunisia', countryCode:'TN', url:'https://elmi.hbku.edu.qa/en/publications/secrecy-analysis-of-pinching-antenna-systems/' }
};
export function publicationConference(paper: Publication): Conference | undefined {
  if (paper.type !== 'Conference') return undefined;
  const acronym = paper.venue.match(/\b(VTC|ICC|WCNC|ICMLCN|ICUFN|ICETES|ICEE|WASOWC|MENACOMM)\b/)?.[1];
  return acronym ? conferences[`${acronym}-${paper.year}`] : undefined;
}
