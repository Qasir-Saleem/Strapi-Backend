import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAbout extends Struct.ComponentSchema {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
  };
}

export interface ComponentsAirportsection extends Struct.ComponentSchema {
  collectionName: 'components_components_airportsections';
  info: {
    displayName: 'airportsection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Faq_Data: Schema.Attribute.Component<'components.faq-data', true>;
    frontimage: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_uses';
  info: {
    displayName: 'Contact_Us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_cta_banners';
  info: {
    displayName: 'CtaBanner';
  };
  attributes: {
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsDestinationSection extends Struct.ComponentSchema {
  collectionName: 'components_components_destination_section_s';
  info: {
    displayName: 'destination_section ';
  };
  attributes: {
    baskervvile: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Faq_Data: Schema.Attribute.Component<'components.faq-data', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaqData extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_data';
  info: {
    displayName: 'Faq_Data';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaqImageSection extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_image_sections';
  info: {
    displayName: 'faq_imageSection';
  };
  attributes: {
    Faq_Data: Schema.Attribute.Component<'components.faq-data', true>;
    form_description: Schema.Attribute.String;
    form_title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleBasker: Schema.Attribute.String;
  };
}

export interface ComponentsFirstIcons extends Struct.ComponentSchema {
  collectionName: 'components_components_first_icons';
  info: {
    displayName: 'first_icons';
  };
  attributes: {
    description: Schema.Attribute.Text;
    richtext: Schema.Attribute.Blocks;
    ServiceCard: Schema.Attribute.Component<'components.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFleets extends Struct.ComponentSchema {
  collectionName: 'components_components_fleets';
  info: {
    displayName: 'Fleets';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    lagguge: Schema.Attribute.String;
    person: Schema.Attribute.String;
    richtext: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsFleetsSection extends Struct.ComponentSchema {
  collectionName: 'components_components_fleets_sections';
  info: {
    displayName: 'FleetsSection';
  };
  attributes: {
    Fleet: Schema.Attribute.Component<'components.fleets', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleBasker: Schema.Attribute.Text;
  };
}

export interface ComponentsFooterheading extends Struct.ComponentSchema {
  collectionName: 'components_components_footerheadings';
  info: {
    displayName: 'footerheading';
  };
  attributes: {
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_two: Schema.Attribute.String;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    Bgimage: Schema.Attribute.Media<'images', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_sections';
  info: {
    displayName: 'Hero_Section';
  };
  attributes: {
    altTags: Schema.Attribute.Text;
    BgCover_1920x600: Schema.Attribute.Media<'images'>;
    descriptio1: Schema.Attribute.Text;
    ImageTitlte: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsMainMultiData extends Struct.ComponentSchema {
  collectionName: 'components_components_main_multi_data';
  info: {
    displayName: 'mainMultiData';
  };
  attributes: {
    BottomText: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    multi: Schema.Attribute.Component<'components.multi-data', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsMainRoute extends Struct.ComponentSchema {
  collectionName: 'components_components_main_routes';
  info: {
    displayName: 'mainRoute';
  };
  attributes: {
    description: Schema.Attribute.Text;
    route: Schema.Attribute.Component<'components.routes-desgin', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsMajorRouteGrids extends Struct.ComponentSchema {
  collectionName: 'components_components_major_route_grids';
  info: {
    displayName: 'MajorRouteGrids';
  };
  attributes: {
    cards: Schema.Attribute.Component<'components.routes-desgin', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titlebasker: Schema.Attribute.String;
  };
}

export interface ComponentsMultiData extends Struct.ComponentSchema {
  collectionName: 'components_components_multi_data';
  info: {
    displayName: 'multiData';
  };
  attributes: {
    description: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'components.faq-data', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsReview extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsRoutesDesgin extends Struct.ComponentSchema {
  collectionName: 'components_components_routes_desgins';
  info: {
    displayName: 'routesDesgin';
  };
  attributes: {
    distance: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    routename: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface ComponentsSeoTags extends Struct.ComponentSchema {
  collectionName: 'components_components_seo_tags';
  info: {
    displayName: 'SeoTags';
  };
  attributes: {
    cannonicalUrl: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    altTags: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    ImageTitlte: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_components_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    altstext: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_components_services_grids';
  info: {
    displayName: 'ServicesGrid';
  };
  attributes: {
    baskerTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    ServiceCard: Schema.Attribute.Component<'components.service-card', true>;
    subheading: Schema.Attribute.Blocks;
  };
}

export interface ComponentsSideSection extends Struct.ComponentSchema {
  collectionName: 'components_components_side_sections';
  info: {
    displayName: 'Side_Section';
  };
  attributes: {
    altTags: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_two: Schema.Attribute.String;
  };
}

export interface RoutesComponentsCards extends Struct.ComponentSchema {
  collectionName: 'components_routes_components_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface RoutesComponentsRoutes extends Struct.ComponentSchema {
  collectionName: 'components_routes_components_routes';
  info: {
    displayName: 'Routes';
  };
  attributes: {};
}

export interface RoutesComponentsUspSection extends Struct.ComponentSchema {
  collectionName: 'components_routes_components_usp_sections';
  info: {
    displayName: 'USP_Section';
  };
  attributes: {
    baskerTitle: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'routes-components.cards', true>;
    image: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_two: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.about': ComponentsAbout;
      'components.airportsection': ComponentsAirportsection;
      'components.contact-us': ComponentsContactUs;
      'components.cta-banner': ComponentsCtaBanner;
      'components.destination-section': ComponentsDestinationSection;
      'components.faq': ComponentsFaq;
      'components.faq-data': ComponentsFaqData;
      'components.faq-image-section': ComponentsFaqImageSection;
      'components.first-icons': ComponentsFirstIcons;
      'components.fleets': ComponentsFleets;
      'components.fleets-section': ComponentsFleetsSection;
      'components.footerheading': ComponentsFooterheading;
      'components.hero': ComponentsHero;
      'components.hero-section': ComponentsHeroSection;
      'components.main-multi-data': ComponentsMainMultiData;
      'components.main-route': ComponentsMainRoute;
      'components.major-route-grids': ComponentsMajorRouteGrids;
      'components.multi-data': ComponentsMultiData;
      'components.review': ComponentsReview;
      'components.routes-desgin': ComponentsRoutesDesgin;
      'components.seo-tags': ComponentsSeoTags;
      'components.service': ComponentsService;
      'components.service-card': ComponentsServiceCard;
      'components.services-grid': ComponentsServicesGrid;
      'components.side-section': ComponentsSideSection;
      'routes-components.cards': RoutesComponentsCards;
      'routes-components.routes': RoutesComponentsRoutes;
      'routes-components.usp-section': RoutesComponentsUspSection;
    }
  }
}
