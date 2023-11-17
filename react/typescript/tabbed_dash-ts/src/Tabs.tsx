import React from "react";
import { ComponentsProvider, Tabs2, Tab2 } from "@looker/components";
import { EmbeddedDashboard1, EmbeddedDashboard2, EmbeddedDashboard3,EmbeddedDashboard4
} from "./Dashboard";

export const Tabs = () => (
 <ComponentsProvider>
   <Tabs2>
     <Tab2 id="5" label="Product Sales Report">
      {/* Order data from the last 12 months */}
       <EmbeddedDashboard1 id={2} />
     </Tab2>
     <Tab2 id="7" label="Product Repurchase Rate">
       {/* Anonymized customer data */}
       <EmbeddedDashboard3 id={12} />
     </Tab2>

     <Tab2 id="6" label="(RAW) Product Map">
       {/* Anonymized customer data */}
       <EmbeddedDashboard4 id={13} />
     </Tab2>
     <Tab2 id="2" label="(RAW) SKU Report">
       {/* Current global inventory */}
       <EmbeddedDashboard2 id={11} />
     </Tab2>
   </Tabs2>
 </ComponentsProvider>
)