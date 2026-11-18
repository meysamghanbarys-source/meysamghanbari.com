export const root = '/satellite-applications/';
export const pageSize = 12;
export const industries = [
  {id:'energy-infrastructure', name:'Energy & Infrastructure', summary:'Plan inspections and maintenance across power plants, pipelines, mines and other widely distributed assets.', families:['Electric utilities','Oil and gas infrastructure','Renewable energy','Mining operations']},
  {id:'agriculture-water', name:'Agriculture & Water', summary:'Connect field and basin measurements to irrigation schedules, crop scouting and water allocation.', families:['Irrigation management','Crop monitoring','Water resources','Seasonal planning']},
  {id:'maritime-coastal', name:'Maritime & Coastal', summary:'Give offshore operators, ports and coastal managers an earlier view of pollution, navigational conditions and changes along the shore.', families:['Marine pollution','Port operations','Coastal change','Fisheries']},
  {id:'environment-climate', name:'Environment & Climate', summary:'Locate emissions and ecological change, then direct field teams to verify the cause and extent.', families:['Emissions monitoring','Ecosystem management','Environmental compliance']},
  {id:'weather-hazards', name:'Weather & Natural Hazards', summary:'Help civil operators decide when to issue warnings, safeguard assets or inspect damage after an event.', families:['Flood response','Fire monitoring','Severe weather','Damage assessment']},
  {id:'cities-construction', name:'Cities & Construction', summary:'Track movement, development and construction footprints so planners can prioritize site visits.', families:['Structural movement','Urban planning','Construction progress']},
  {id:'telecommunications', name:'Telecommunications & Connectivity', summary:'Connect people, operations and instruments where terrestrial communications have limited reach.', families:['Remote backhaul','Industrial telemetry','Service continuity']},
  {id:'navigation-geospatial', name:'Navigation & Geospatial Services', summary:'Match positioning accuracy, timing and reference networks to surveying, navigation and industrial control.', families:['Precise positioning','Surveying','Timing services']},
  {id:'transportation-logistics', name:'Transportation & Logistics', summary:'Help fleet, rail and freight teams locate goods, plan routes and assess disruptions across long corridors.', families:['Supply-chain visibility','Fleet operations','Transport corridors']}
] as const;
export type IndustryId = typeof industries[number]['id'];
export const industryById = new Map<string,typeof industries[number]>(industries.map(i=>[i.id,i]));
export const industryUrl = (id:string) => `${root}${id}/`;
export const articleUrl = (item:{industry:string;slug:string}) => `${industryUrl(item.industry)}${item.slug}/`;
export const familyId = (name:string) => 'family-'+name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const pageUrl = (page:number) => page===1 ? root : `${root}browse/${page}/`;
export const dateLabel = (date:string) => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(date+'T12:00:00Z'));
export const orbitGuide = [
  {name:'LEO',full:'Low Earth orbit',range:'Below about 2,000 km',strength:'Close passes can resolve small features and shorten the communication path. Each spacecraft moves quickly across the sky.',trade:'Ask when a usable pass occurs over the actual site. Coverage, viewing angle, sensor mode and the number of satellites all affect the answer.'},
  {name:'MEO',full:'Medium Earth orbit',range:'Between LEO and geostationary altitude',strength:'A wider footprint and longer passes support services such as satellite navigation. A constellation supplies the geometry a ground receiver needs.',trade:'A longer signal path changes the antenna and link budget. Check whether the application needs an image, a timing signal or a communication service.'},
  {name:'GEO',full:'Geostationary orbit',range:'About 35,786 km above the equator',strength:'The spacecraft stays over the same longitude. That steady view serves weather observation and continuous regional communications.',trade:'Distance limits fine spatial detail for a given aperture. High latitudes see the spacecraft low on the horizon, and a fixed view alone does not guarantee a useful measurement.'}
];
export const technologies = [
  ['Optical and multispectral imaging','Measures reflected sunlight in selected wavelength bands, useful for land cover, crop condition and visible surface features.'],
  ['Synthetic-aperture radar','Transmits microwave pulses and records their echoes. Surface roughness and geometry affect the response.'],
  ['Thermal and atmospheric sensing','Measures emitted radiation or absorption in selected bands to estimate temperature or atmospheric properties.'],
  ['Satellite communications and IoT','Moves voice, broadband or small sensor messages between ground terminals and a network.'],
  ['GNSS and positioning','Uses satellite signals and timing measurements to estimate a receiver’s position or transfer a time reference.']
];
