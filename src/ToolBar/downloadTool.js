import { jsonToGenbank } from "bio-parsers";
import FileSaver from "file-saver";
import React from "react";
import { Icon, IconClasses } from "@blueprintjs/core";

export default ({ sequenceData }) => {
  return {
    Icon: <Icon iconName={IconClasses.IMPORT} />,
    onIconClick: function() {
      let blob = new Blob([jsonToGenbank(sequenceData)], {
        type: "text/plain"
      });
      FileSaver.saveAs(blob, "result_plasmid.gb");
      // downloadSequenceData(sequenceData || )
    },
    tooltip: "Download .gb file",
    id: "downloadTool"
  };
};
