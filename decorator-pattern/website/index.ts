import ConcreteWebsite from "./ConcreteWebsite";
import WebsiteDesign from "./WebsiteDesign";
import WebsiteHosting from "./WebsiteHosting";
import WebsiteDomain from "./WebsiteDomain";
import WebsiteCetificate from "./WebsiteCetificate";
import WebsiteSEO from "./WebsiteSEO";

const website = new ConcreteWebsite();
console.log(website.getDescription()); // Sitio web estándar
console.log(website.getPrice()); // 2500

const websiteWithDesign = new WebsiteDesign(website);
console.log(websiteWithDesign.getDescription()); // Sitio web estándar + diseño
console.log(websiteWithDesign.getPrice()); // 6000

const websiteWithHosting = new WebsiteHosting(websiteWithDesign);
console.log(websiteWithHosting.getDescription()); // Sitio web estándar + diseño + alojamiento
console.log(websiteWithHosting.getPrice()); // 6650

const websiteWithDomain = new WebsiteDomain(websiteWithHosting);
console.log(websiteWithDomain.getDescription()); // Sitio web estándar + diseño + alojamiento + dominio
console.log(websiteWithDomain.getPrice()); // 7150

const websiteWithCertificate = new WebsiteCetificate(websiteWithDomain);
console.log(websiteWithCertificate.getDescription()); // Sitio web estándar + diseño + alojamiento + dominio + ssl
console.log(websiteWithCertificate.getPrice()); // 7300

const websiteWithSEO = new WebsiteSEO(websiteWithCertificate);
console.log(websiteWithSEO.getDescription()); // Sitio web estándar + diseño + alojamiento + dominio + ssl + seo
console.log(websiteWithSEO.getPrice()); // 8300