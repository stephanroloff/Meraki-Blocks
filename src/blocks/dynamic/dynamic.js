import "../../index.scss";
import { registerBlockType } from "@wordpress/blocks";
import ServerSideRender from "@wordpress/server-side-render";

registerBlockType("ourplugin/dynamic", {      //*** 
  title: "Dynamic Block",                     //*** 
  icon: "smiley",                             //*** 
  category: "common",                         //*** 
  attributes: {
    message: "string",                        //*** 
  },
  edit: function () {
    return (
      <div>
        <h3 className="text-h3">This is a DINAMIC BLOCK in the Editor!!!</h3>
        <ServerSideRender
          block="ourplugin/dynamic"           //*** 
          attributes={{
            showPostCounts: true,
            displayAsDropdown: false,
          }}
        />
      </div>
    );
  },
  save: function () {
    return null;
  },
});
