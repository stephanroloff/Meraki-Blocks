import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import pfeil from "./assets/pfeil_accordion.png";               //***

registerBlockType('city-concepts/accordion-static-block', {    //*** 
  title: "Accordion Static Block",
  icon: "media-document",                                      //***
  category: "merakistarter",                                   //***
  supports: {
    align: true,
    alignWide: true,
  },

  edit: () => {
    const blockProps = useBlockProps();

    const MY_TEMPLATE = [
      ['core/group', { className: 'accordion' }, [
        ['core/image', { className: 'accordion-arrow', url: pfeil }],   //***
        ['core/paragraph', { className: 'accordion-arrow' }],
      ]],
      ['core/group', { className: 'panel' }, [
        ['core/group', { className: 'inner-content' }],
      ]]
    ];

    return (
      <div {...blockProps}>
        <InnerBlocks
          template={MY_TEMPLATE}
        />
      </div>
    );
  },

  save: () => {
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div >
    );
  },
});
