import "../../index.scss";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourplugin/static", {       //*** 
  title: "Static",                            //*** 
  icon: "megaphone",                          //*** 
  category: "common",                         //*** 
  supports: {
    align: true,
    alignWide: true,
  },
  edit: function () {
    return <h3 className="text-static">This is a STATIC BLOCK from Editor!</h3>; //*** 
  },
  save: function () {
    return (
      <h3 className="text-static">This is a STATIC BLOCK on the Frontend!</h3>  //*** 
    );
  },
});
