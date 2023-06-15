"use client";

import DeskTopMenu from "../Components/DeskTopMenu";

export default function Test() {
  return ( 
    <>
    <DeskTopMenu />
<div className=" m-60">

 



        <div className="border-b border-gray-200 dark:border-gray-700">
  <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
      Tab 1
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
      Tab 2
    </button>
    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3" role="tab">
      Tab 3
    </button>
  </nav>
</div>

<div className="mt-3">
  <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> ddtab body.
    </p>
  </div>
  <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> ddtab body.
    </p>
  </div>
  <div id="tabs-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
    <p className="text-gray-500 dark:text-gray-400">
      This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> ddtab body.
    </p>
  </div>
</div>


</div>

</>
  )
}
