import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('meraki/simple-card-block', {
    title: "Simple Card Block",
    icon: "building",
    category: "merakistarter",
    supports: {
        align: true,
        alignWide: true,
    },

    edit: () => {
        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                <div className="wp-card">
                    <InnerBlocks />
                </div>
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps}>
                <div className="wp-card">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
});