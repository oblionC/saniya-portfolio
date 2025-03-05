---
layout: base
---
<div class="max-w-screen md:px-20 px-5 text-white font-[Instrument_Serif] my-20">
    <div class="w-2/3 mx-auto mb-20">
        <div class="lg:text-[96px] md:text-[96px] text-[50px] flex justify-center items-center fit-title-with-banner min-h-[145px] italic">
            {{ page.category }}
        </div>
        <div class="md:text-[36px] text-[22px] md:leading-10 leading-5 font-[Instrument_Serif] my-10 text-center">
            {{ page.description }}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-5 lazyload">
        {% assign item = site[page.category] | where: "name", "social anxiety" | first %}
        <div class="col-span-2 rounded-3xl bg-[#600000] overflow-hidden relative">
            <a href="{{site.baseurl}}{{ item.url }}">
                <div class="absolute top-[3%] right-[3%] text-[2.5cqw] text-black">
                    2023
                </div>
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div>
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            </a>
        </div>
        {% assign item = site[page.category] | where: "name", "photography 2" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 3" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 4" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 5" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 6" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 7" | first %}
        {% include photo.html item=item %}
        {% assign item = site[page.category] | where: "name", "photography 8" | first %}
        {% include photo.html item=item %}
    </div>
{% include footer.html %}
</div>