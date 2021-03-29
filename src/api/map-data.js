import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sesctions = [],
      Menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sesctions),
      menu: mapMenu(Menu),
    };
  });
};
