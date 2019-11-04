import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import MeetupPreview from "./preview-templates/MeetupPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPagePreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import NewPreview from "./preview-templates/NewPreview";
import PastNewsPagePreview from "./preview-templates/PastNewsPagePreview";
import EventPreview from "./preview-templates/EventPreview";
import PastEventsPagePreview from "./preview-templates/PastEventsPagePreview";


CMS.registerPreviewTemplate("meetups", MeetupPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("pastMeetups", PastMeetupsPagePreview);
CMS.registerPreviewTemplate("news", NewPreview);
CMS.registerPreviewTemplate("pastNews", PastNewsPagePreview);
CMS.registerPreviewTemplate("events", EventPreview);
CMS.registerPreviewTemplate("pastEvents", PastEventsPagePreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
