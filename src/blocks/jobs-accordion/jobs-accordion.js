import "../../index.scss";
import { registerBlockType } from "@wordpress/blocks";
const { ServerSideRender } = wp.components; //IMPORTANT!
import { 
  useBlockProps,
  InspectorControls,  
} from '@wordpress/block-editor';
import { 
  TextControl,
  PanelBody,
  PanelRow,
  __experimentalNumberControl as NumberControl
} from '@wordpress/components';

registerBlockType("ourplugin/jobs-accordion", {              //*** 
  apiVersion: 2,
  title: "Jobs Accordion",                                   //*** 
  icon: "editor-ul",                                       //*** 
  category: "city-concepts",                                //*** 
  attributes: {
    amountSelected: {
      type: 'string',
    },
    offset: {
      type: 'string',
    }
  },
  supports: {
    align: true,
    color: true,
  },
  
  edit: function (props) {
    const {attributes, setAttributes} = props;
    const {amountSelected, offset} = attributes;
    const blockProps = useBlockProps();
    
    return (
      <div { ...blockProps }>
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <h2>Jobs Feed</h2>                                            {/***/}
            </PanelRow>
            <PanelRow>                                     
              {/* <TextControl
                    placeholder="Please enter a number"
                    label={ 'Number of Projects'}
                    value={ amountSelected || 0}
                    onChange={ value => setAttributes( { amountSelected: value } ) }
              /> */}
              <NumberControl
                    label={ 'Number of Jobs'}
                    min={0}
                    onChange={ value => setAttributes( { amountSelected: value } )}
                    value={ amountSelected || 0}
              />
            </PanelRow>
            <PanelRow>
              <NumberControl
                    label={ 'Offset'}
                    min={0}
                    onChange={ value => setAttributes({offset: value}) }
                    value={ offset || 0}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <ServerSideRender
          block="ourplugin/jobs-accordion"                                     //***
          attributes={{
            amountSelected: attributes.amountSelected,
            offset: attributes.offset,
          }}
        />
      </div>
    );
  },
  save: function () {
    return null;
  },
});

