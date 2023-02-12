import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('meraki/multi-layer-block', {      //*** 
    title: "Multi Layer Block",
    icon: "building",                                //*** 
    category: "merakistarter",                       //*** 
    supports: {
        align: true,
        alignWide: true,
    },

    edit: () => {
        const blockProps = useBlockProps();
        const ALLOWED_BLOCKS = ['meraki/layer-block'];               //*** IMPORTANT!

        const MY_TEMPLATE = [

            ['core/group', { className: 'bg-img-container' }, [
                ['core/cover', { className: 'bg-img', overlayOpacity: 0, dimRatio: 0 }],
            ]],
            ['meraki/layer-block', {}],                                       //*** IMPORTANT!
        ];

        return (
            <div {...blockProps}>
                <div className="multi-layer-wrapper">
                    <InnerBlocks
                        template={MY_TEMPLATE}
                        allowedBlocks={ALLOWED_BLOCKS}
                    />
                </div>
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps}>
                <div className="multi-layer-wrapper">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
});