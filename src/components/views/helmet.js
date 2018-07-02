import React from "react";
import { Helmet } from "react-helmet";

export class HelmetHead extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <script type="text/javascript">
          window.$crisp=[];window.CRISP_WEBSITE_ID="a217b900-4ef5-42d5-aa29-bc34fb89b464";(function()
          &#123;d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);&#125;
          )();
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-74434504-4"
        />
        <script>
          window.dataLayer = window.dataLayer || []; function
          gtag()&#123;dataLayer.push(arguments);&#125; gtag('js', new Date());
          gtag('config', 'UA-74434504-4');
        </script>
      </Helmet>
    );
  }
}
