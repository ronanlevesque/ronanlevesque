// 'use client';

// import { useEffect } from 'react';
// import * as tocbot from 'tocbot';

// const TableOfContents = () => {
//   useEffect(() => {
//     tocbot.init({
//       tocSelector: '.js-toc',
//       contentSelector: '.js-toc-content',
//       headingSelector: 'h2, h3',
//       hasInnerContainers: true,
//       linkClass: 'toc-link',
//       activeLinkClass: 'is-active-link',
//       listClass: 'toc-list',
//       isCollapsedClass: 'is-collapsed',
//       listItemClass: 'toc-list-item',
//       activeListItemClass: 'is-active-li',
//       collapseDepth: 3,
//       //scrollSmooth: true,
//       //scrollSmoothDuration: 420,
//       headingsOffset: 100, // Adjusted for proper alignment
//     });

//     return () => tocbot.destroy();
//   }, []);
//   return (
//     <div className="hidden">
//       <span>Table of Contents</span>
//       <div>--</div>
//       <div className="js-toc"></div>
//     </div>
//   );
// };

// export default TableOfContents;
