---
layout: base
---
<div class="max-w-screen md:px-20 px-5 text-white font-[Instrument_Serif] mb-20">
    <div class="lg:w-2/3 w-full mx-auto mb-20">
        <div class="md:text-[96px] text-[50px] md:leading-20 leading-10 flex justify-center items-center fit-title-ith-banner min-h-[145px] italic text-center">
            {{ page.name}}
        </div>
        <div class="md:text-[36px] text-[22px] md:leading-10 leading-5 font-[Instrument_Serif] my-10 text-center">
            {{ page.description }}
        </div>
    </div>
    {{ content }}
</div>
{% include footer.html year=page.year%}