import React, { useState } from "react";

import Desktop from "./desktop";

function IconFunction(props)
{
    const [Highlight, SetHighlight] = useState(false)

    function HighlightIcon()
    {
        if (Highlight) SetHighlight(false)
        else SetHighlight(true)
    }

    return(
        <div className={ `icon${Highlight? " highlight-icon" : ""}` } onClick={ HighlightIcon } ondblclick="OpenWindow(this)">
            <img src={ props.IconImage } />
            <p>{ props.IconName }</p>
        </div>
    );
}

export default class Icon extends React.Component
{
    render()
    {
        return( <IconFunction IconName={this.props.IconName} IconImage={this.props.IconImage} /> )   
    }
}