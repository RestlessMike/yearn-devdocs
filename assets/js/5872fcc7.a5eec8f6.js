"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[525],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4413:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l={},i="Governance and Operations",s={unversionedId:"governance/governance-and-operations",id:"governance/governance-and-operations",isDocsHomePage:!1,title:"Governance and Operations",description:"---",source:"@site/docs/contributing/governance/governance-and-operations.md",sourceDirName:"governance",slug:"/governance/governance-and-operations",permalink:"/contributing/governance/governance-and-operations",tags:[],version:"current",lastUpdatedBy:"Marco Guaspari Worms",lastUpdatedAt:1651495428,formattedLastUpdatedAt:"5/2/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Decision-Making Processes",permalink:"/contributing/operations/decision-making"},next:{title:"Proposal Process",permalink:"/contributing/governance/proposal-process"}},p=[{value:"DAO Responsibilities",id:"dao-responsibilities",children:[{value:"Token Holders",id:"token-holders",children:[]},{value:"yTeams",id:"yteams",children:[]},{value:"Multisig",id:"multisig",children:[]}]},{value:"Future Implementations",id:"future-implementations",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"governance-and-operations"},"Governance and Operations"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Since ",(0,o.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-61-governance-2-0/10460"},"YIP-61: Governance 2.0")," passed on April 25th, 2021, yearn began the transition into a ",(0,o.kt)("strong",{parentName:"p"},"multi-DAO")," structure, managed by ",(0,o.kt)("strong",{parentName:"p"},"constrained delegation"),". This approach allows protocol development to not be stiffened by bureaucracy while maintaining a sufficient level of decentralization."),(0,o.kt)("p",null,"Multi-DAO refers to the fluid number of decentralized autonomous organizations (DAOs) that contribute to the protocol in some unique way. These independent groups consist of YFI holders, yTeams and the Multisig."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"YFI holders")," vote for changes to the protocol or the protocols governance structure"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"yTeams")," focus on specific aspects of the protocol or relevant operations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multisig")," members execute or veto any on-chain decisions")),(0,o.kt)("p",null,"Token holders have ultimate say over what yTeams exist, who is part of the Multisig, and the limitations of each group's operational control. The term 'constrained delgation' originates from token holders delegating specific powers to various groups that build and manage yearn."),(0,o.kt)("p",null,"A simplified flow of governance would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. YFI holders create, destroy and define limitations of yTeams\n2. yTeam notifies yTx of a decision\n3. yTx creates a delegated transaction and send it to the Multisig\n4. Multisig executes or vetos the transaction\n")),(0,o.kt)("h2",{id:"dao-responsibilities"},"DAO Responsibilities"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/IDysF5O.png",alt:null})),(0,o.kt)("h3",{id:"token-holders"},"Token Holders"),(0,o.kt)("p",null,"it is the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/contributing/governance/yfi"},"YFI token")," holder's duty to create and vote for proposals that improve the protocol."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Proposals"),(0,o.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yearn Improvement Proposal (YIP)"),(0,o.kt)("td",{parentName:"tr",align:null},"A proposal to execute on any power delegated to YFI holders or outside the scope of enumerated powers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yearn Delegation Proposal (YDP)"),(0,o.kt)("td",{parentName:"tr",align:null},"A proposal to change where any discrete decision-making power is delegated")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yearn Signaling Proposal (YSP)"),(0,o.kt)("td",{parentName:"tr",align:null},"A non-binding proposal to signal community feelings or intent on any issue")))),(0,o.kt)("p",null,"Specifically, these proposals allow token holders to make the following decisions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Power"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Manage Powers"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI holders can vote to create, assign, or revoke discrete powers to or from yTeams")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Change YFI Token Contract"),(0,o.kt)("td",{parentName:"tr",align:null},"Any interaction with the YFI token contract, such as to mint YFI or burn the minting keys, remains under the control of YFI holders.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set Fees"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the standard fee structures in the Yearn Protocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Change Multisig Signers"),(0,o.kt)("td",{parentName:"tr",align:null},"As the Multisig will continue to hold critical powers over the near term, only YFI holders can vote to change its signers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ratify yTeams"),(0,o.kt)("td",{parentName:"tr",align:null},"Formally ratify or deratify yTeams to control which yTeams can hold delegated powers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Change yOps Signers"),(0,o.kt)("td",{parentName:"tr",align:null},"As yOps has the power to change signers of other yTeams, this is a special power to change the signers of yOps")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spend Treasury Funds"),(0,o.kt)("td",{parentName:"tr",align:null},"Spend funds from the treasury")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"YIP Power"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Holders have the power to propose a YIP on anything not already delegated")))),(0,o.kt)("h3",{id:"yteams"},"yTeams"),(0,o.kt)("p",null,"Each yTeam has an objective and discrete powers which are defined by token holders. They can be broken further into membership pools, which are separate groups of contributors working towards similar goals as the overarching team. Additionally, one membership pool can bet a part of multiple yTeams."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"yTeam"),(0,o.kt)("th",{parentName:"tr",align:null},"Objective"),(0,o.kt)("th",{parentName:"tr",align:null},"Membership Pool"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yGuard"),(0,o.kt)("td",{parentName:"tr",align:null},"Protect the vaults"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Protocol Dev, YFI Strategists, YFI Mechanics, YFI Secret Admirers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yBrain"),(0,o.kt)("td",{parentName:"tr",align:null},"Manage the strats"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Strategists")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yDev"),(0,o.kt)("td",{parentName:"tr",align:null},"Manage the protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Protocol Dev")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yPeople"),(0,o.kt)("td",{parentName:"tr",align:null},"Curate the team"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Compensation Working Group, YFI Advisors")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yBudget"),(0,o.kt)("td",{parentName:"tr",align:null},"Spend money well"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Finances, YFI Advisors")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yFarm"),(0,o.kt)("td",{parentName:"tr",align:null},"Grow the treasury"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Secret Admirers, YFI Secret Entrance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yTx"),(0,o.kt)("td",{parentName:"tr",align:null},"Write transactions"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Doers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yOps"),(0,o.kt)("td",{parentName:"tr",align:null},"Coordinate contributors"),(0,o.kt)("td",{parentName:"tr",align:null},"YFI Ops")))),(0,o.kt)("p",null,"Each yTeam is assigned specific decision-making powers, defined by YIP-61:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"yTeam"),(0,o.kt)("th",{parentName:"tr",align:null},"Power"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yGuard"),(0,o.kt)("td",{parentName:"tr",align:null},"Emergency Powers"),(0,o.kt)("td",{parentName:"tr",align:null},"Immediately intervene in case of attack or bug to shutdown or rollback strategies or vaults")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yBrain"),(0,o.kt)("td",{parentName:"tr",align:null},"Manage Strategies"),(0,o.kt)("td",{parentName:"tr",align:null},"Activate, deactivate, tune, and maintain strategies")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yDev"),(0,o.kt)("td",{parentName:"tr",align:null},"Define Yearn Protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"Decide what code is considered part of yearn and what isn\u2019t")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yDev"),(0,o.kt)("td",{parentName:"tr",align:null},"Manage Protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"Maintain and improve the Yearn Protocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yDev"),(0,o.kt)("td",{parentName:"tr",align:null},"Add Strategies"),(0,o.kt)("td",{parentName:"tr",align:null},"Add new strategies to vaults")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yTx"),(0,o.kt)("td",{parentName:"tr",align:null},"Delegate Transactions"),(0,o.kt)("td",{parentName:"tr",align:null},"Create delegated transactions for the multisig to sign and execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yPeople"),(0,o.kt)("td",{parentName:"tr",align:null},"Pay Team"),(0,o.kt)("td",{parentName:"tr",align:null},"Create, deploy, modify, or terminate Yearn compensation packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yBudget"),(0,o.kt)("td",{parentName:"tr",align:null},"Set Budgets"),(0,o.kt)("td",{parentName:"tr",align:null},"Create budgets for coordinape, grants, hiring, operations, or other workstreams")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yFarm"),(0,o.kt)("td",{parentName:"tr",align:null},"Farm Treasury"),(0,o.kt)("td",{parentName:"tr",align:null},"Farm with the treasury and make decisions on airdrops")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yOps"),(0,o.kt)("td",{parentName:"tr",align:null},"Ratify yTeam Signers"),(0,o.kt)("td",{parentName:"tr",align:null},"Formally approve or remove signers for each yTeam")))),(0,o.kt)("h3",{id:"multisig"},"Multisig"),(0,o.kt)("p",null,"Decisions issued by yTeams will be executed on-chain by the Multisig until a more decentralized system is approved for implementation. In the mean time, the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/resources/faq#who-is-on-the-multisig"},"Multisig")," controls the following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Power"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Execution Power"),(0,o.kt)("td",{parentName:"tr",align:null},"The power to execute decisions made by YFI holders and yTeams on-chain")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Veto Power"),(0,o.kt)("td",{parentName:"tr",align:null},"This power allows the Multisig to veto any decision and ideally should not be needed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transitionary Power"),(0,o.kt)("td",{parentName:"tr",align:null},"A temporary power enabling the Multisig to operate under the mandate of YIP-41 until the set of decision-making powers covers all needed transactions")))),(0,o.kt)("h2",{id:"future-implementations"},"Future Implementations"),(0,o.kt)("p",null,"Yearn is continuously paving the way towards an ideal balance of DAO decentralization and productivity. The current phase of efforts impliment changes mostly on the social layer, and in the future we will be moving towards software implementations such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multisig consensus mechanisms that allows each yTeam to have execution power"),(0,o.kt)("li",{parentName:"ul"},"Move from proxy voting to on-chain voting"),(0,o.kt)("li",{parentName:"ul"},"tokenize decision-making powers as NFTs"),(0,o.kt)("li",{parentName:"ul"},"Utilize ",(0,o.kt)("a",{parentName:"li",href:"https://coordinape.com/"},"Coordinape")," for things like budget allocation and compensation")))}m.isMDXComponent=!0}}]);