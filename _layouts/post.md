---
layout: base
---
<div class="max-w-screen md:px-20 px-5 text-white font-[Instrument_Serif] my-20">
    <div class="w-2/3">
        <div class="text-[96px] font-[Instrument_Serif] my-10">
            {{ page.name}}
        </div>
        <div class="text-[36px] font-[Instrument_Serif] my-10">
            {{ page.description}}
        </div>
    </div>
    {{ content }}
</div>
{% include footer.html year=2024 %}