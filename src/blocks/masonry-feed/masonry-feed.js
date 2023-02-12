import "../../index.scss";
import { registerBlockType } from "@wordpress/blocks";
// const { ServerSideRender } = wp.components; //IMPORTANT!
const { serverSideRender: ServerSideRender } = wp;
import {
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  PanelRow,
  __experimentalNumberControl as NumberControl,
  ToggleControl
} from '@wordpress/components';

registerBlockType("meraki/masonry-feed", {              //*** 
  apiVersion: 2,
  title: "Masonry Feed",
  icon: "admin-page",                                       //*** 
  category: "merakistarter",                                //*** 
  attributes: {
    amountSelected: {
      type: 'string',
    },
    overlayHover: {
      type: 'boolean',
      // default: true,
    },
  },
  supports: {
    align: true,
    color: true,
  },

  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { amountSelected, overlayHover } = attributes;
    const blockProps = useBlockProps();
    // const [ hasFixedBackground, setHasFixedBackground ] = useState( true );

    return (
      <div {...blockProps}>
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <h2>Masonry Feed</h2>                                            {/***/}
            </PanelRow>
            <PanelRow>
              <NumberControl
                label={'Number of Pictures'}                                       //***
                min={0}
                onChange={value => setAttributes({ amountSelected: value })}
                value={amountSelected || 0}
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label="Overlay Hover"
                help={
                  overlayHover
                    ? 'Has overlay hover effect.'
                    : 'No overlay hover effect.'
                }
                checked={overlayHover}
                onChange={value => setAttributes({ overlayHover: value })}

              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <ServerSideRender
          block="meraki/masonry-feed"                                     //***
          attributes={{
            amountSelected: attributes.amountSelected,
            overlayHover: attributes.overlayHover,
          }}
        />
      </div>
    );
  },
  save: function () {
    return null;
  },
});
