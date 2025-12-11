import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksData extends Struct.ComponentSchema {
  collectionName: 'components_blocks_data_s';
  info: {
    displayName: 'data ';
  };
  attributes: {};
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['turquorise', 'orange']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'info block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['Turquoise  ', 'orange']>;
  };
}

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
    description: Schema.Attribute.Text;
    Faq_Data: Schema.Attribute.Component<'components.faq-data', true>;
    image: Schema.Attribute.Media<'images', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
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
    Description: Schema.Attribute.Text;
    Fleet: Schema.Attribute.Media<'images'>;
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
    description: Schema.Attribute.Text;
    Fleet: Schema.Attribute.Component<'components.fleets', true>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
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
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgimage1: Schema.Attribute.Media<'images'>;
    descriptio1: Schema.Attribute.Text;
    description: Schema.Attribute.Blocks;
    ImageTitlte: Schema.Attribute.Text;
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

export interface ComponentsRoutesDesgin extends Struct.ComponentSchema {
  collectionName: 'components_components_routes_desgins';
  info: {
    displayName: 'routesDesgin';
  };
  attributes: {
    description: Schema.Attribute.Text;
    distance: Schema.Attribute.String;
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
    description: Schema.Attribute.Text;
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
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_s';
  info: {
    displayName: 'Logo ';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    LogoText: Schema.Attribute.String;
  };
}

export interface Template1GridCard extends Struct.ComponentSchema {
  collectionName: 'components_template1_grid_cards';
  info: {
    displayName: 'GridCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface Template1HeroSection extends Struct.ComponentSchema {
  collectionName: 'components_template1_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Faq_Data: Schema.Attribute.Component<'components.faq', true>;
    image: Schema.Attribute.Media<'images', true>;
    ServiceCard: Schema.Attribute.Component<'template1.service-intro', true>;
    SideSection: Schema.Attribute.Component<'template1.side-section', true>;
    title: Schema.Attribute.String;
  };
}

export interface Template1PageJs extends Struct.ComponentSchema {
  collectionName: 'components_template1_page_js';
  info: {
    displayName: 'Page.js';
  };
  attributes: {};
}

export interface Template1ServiceIntro extends Struct.ComponentSchema {
  collectionName: 'components_template1_service_intros';
  info: {
    displayName: 'ServiceIntro';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'template1.grid-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface Template1SideSection extends Struct.ComponentSchema {
  collectionName: 'components_template1_side_sections';
  info: {
    displayName: 'Side_Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface Template2PageJs extends Struct.ComponentSchema {
  collectionName: 'components_template2_page_js';
  info: {
    displayName: 'page.js';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.data': BlocksData;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'components.about': ComponentsAbout;
      'components.airportsection': ComponentsAirportsection;
      'components.contact-us': ComponentsContactUs;
      'components.faq': ComponentsFaq;
      'components.faq-data': ComponentsFaqData;
      'components.faq-image-section': ComponentsFaqImageSection;
      'components.first-icons': ComponentsFirstIcons;
      'components.fleets': ComponentsFleets;
      'components.fleets-section': ComponentsFleetsSection;
      'components.hero': ComponentsHero;
      'components.hero-section': ComponentsHeroSection;
      'components.main-route': ComponentsMainRoute;
      'components.routes-desgin': ComponentsRoutesDesgin;
      'components.seo-tags': ComponentsSeoTags;
      'components.service': ComponentsService;
      'components.service-card': ComponentsServiceCard;
      'components.services-grid': ComponentsServicesGrid;
      'components.side-section': ComponentsSideSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'template1.grid-card': Template1GridCard;
      'template1.hero-section': Template1HeroSection;
      'template1.page-js': Template1PageJs;
      'template1.service-intro': Template1ServiceIntro;
      'template1.side-section': Template1SideSection;
      'template2.page-js': Template2PageJs;
    }
  }
}
