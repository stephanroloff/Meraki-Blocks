import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'city-concepts/info-with-bg', {    //*** 
    title: "Info with Bg Block",                        //***               
    icon: "media-document",                         //*** 
    category: "city-concepts",                      //*** 
    supports: {
      align: true,
      alignWide: true,
    },

    edit: () => {
        const blockProps = useBlockProps();

        const MY_TEMPLATE = [                       //*** ALL CONTENT INSIDE MY_TEMPLATE
            [ 'core/group', { className: 'img-container'},[ [ 'core/image', {} ] ]],
            [ 'core/group', { className: 'green-line'}],
            [ 'core/group', { className: 'info-container'},[ 
                [ 'core/paragraph', { placeholder: 'Add text...' } ],
                [ 'core/spacer', { placeholder: 'Add text...' } ],
                [ 'core/paragraph', { placeholder: 'Add text...', className: 'link' } ],
            ]],
        ];

        return (
            <div { ...blockProps }>
                <div className="info-with-bg-container">                {/***/}
                    <InnerBlocks
                        template={ MY_TEMPLATE }
                        templateLock="all"
                    />
                </div>
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );