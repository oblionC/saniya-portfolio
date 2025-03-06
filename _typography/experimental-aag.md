---
name: aag(fire)
image: /assets/images/typography/aag_type.png
description: This experimental Devanagari display typeface explores the dynamic interplay of gradients and colours, pushing the boundaries of traditional letterforms.
layout: base
---
<div class="lg:text-[96px] md:text-[96px] text-[50px] flex justify-center items-center min-h-[145px] italic mb-20">
    {{ page.name }}
</div>
<div class="max-w-screen">
    <div class="relative z-1">
        <div class="flex flex-row bg-scroll-right rotate-10">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-62.png">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-62.png">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-62.png">
        </div>
    </div>
    <div class="relative z-2">
        <div class="flex flex-row bg-scroll-left -rotate-10 -translate-y-[100px] xl:-translate-y-[200px] -translate-x-[50px] z-2">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-61.png">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-61.png">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-61.png">
        </div>
    </div>
    <div class="relative">
        <div class="flex flex-row bg-scroll-right xl:-translate-y-[100px] -translate-y-[50px]">
            <img class="object-scale-down w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-63.png">
            <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-63.png">
        </div>
    </div>
    <div class="flex flex-row bg-scroll-left rotate-3">
        <img class="object-scale-down w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-64.png">
        <img class="object-contain w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-64.png">
    </div>
    <div class="flex flex-row bg-scroll-right -rotate-10 -translate-y-[100px]">
        <img class="object-scale-down w-[2000px]" src="{{site.baseurl}}assets/images/typography/website_aag strips-65.png">
        <img class="object-contain w-[2000px] " src="{{site.baseurl}}assets/images/typography/website_aag strips-65.png">
    </div>
</div>
<div class="text-[36px] h-[200px] flex justify-center items-center leading-10 text-center my-20">
    This Devanagari display typeface explores the <br> dynamic interplay of gradients and colours, pushing <br> the boundaries of traditional letterforms.
</div>
<div class="w-full h-fit lg:px-20 px-5 font-[Instrument_Serif] text-white overflow-hidden mb-20">
    <div class="grid grid-cols-2 md:grid-rows-1 grid-rows-2 gap-5">
        <div class="md:col-span-1 col-span-2 rounded-3xl overflow-hidden relative hover:cursor-pointer image-switch i1">
            <img class="relative object-scale-down" src="{{site.baseurl}}assets/images/typography/website_23.png">
            <img class="absolute top-0 left-0 object-scale-down" src="{{site.baseurl}}assets/images/typography/website_59.png">
        </div>
        <div class="md:col-span-1 col-span-2 rounded-3xl overflow-hidden relative hover:cursor-pointer image-switch i2">
            <img class="relative object-scale-down opacity-0" src="{{site.baseurl}}assets/images/typography/website_59.png">
            <img class="absolute top-0 left-0 object-scale-down opacity-0" src="{{site.baseurl}}assets/images/typography/website_23.png">
        </div>
    </div>
</div>
{% include footer.html year=2024%}