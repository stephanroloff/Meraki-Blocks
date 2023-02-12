import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
    PanelRow,
    __experimentalNumberControl as NumberControl,
} from '@wordpress/components';

registerBlockType('meraki/layer-block', {      //*** 
    title: "Layer Block",
    icon: "building",                          //*** 
    category: "merakistarter",                 //*** 
    supports: {
        align: true,
        alignWide: true,
    },
    attributes: {
        zIndex: {
            type: 'string',
        }
    },

    edit: (props) => {
        const { attributes, setAttributes } = props;
        const { zIndex } = attributes;
        const zIndexValue = {
            zIndex: zIndex
        };
        const blockProps = useBlockProps({ style: zIndexValue });

        const MY_TEMPLATE = [
            // ['core/cover', { className: 'bg-img', overlayOpacity: 0, dimRatio: 0 }],
            ['core/cover', { className: 'layer', useFeaturedImage: true }],
        ];

        return (
            <div {...blockProps} >
                <InspectorControls>
                    <PanelBody>
                        <PanelRow>
                            <h2>Layer Block</h2>                                            {/***/}
                        </PanelRow>
                        <PanelRow>
                            <NumberControl
                                label={'z-index'}
                                min={0}
                                onChange={value => setAttributes({ zIndex: value })}
                                value={zIndex || 0}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <InnerBlocks
                    template={MY_TEMPLATE}
                />
            </div>
        );
    },

    save: (props) => {
        const { attributes } = props;
        const { zIndex } = attributes;
        const zIndexValue = {
            zIndex: zIndex
        };
        const blockProps = useBlockProps.save({ style: zIndexValue });

        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        );
    },
});