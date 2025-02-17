---
layout: base
---
<div class="max-w-screen md:px-20 px-5 text-white font-[Instrument_Serif] my-20">
    <div class="w-2/3 mx-auto mb-20">
        <div class="text-[96px] font-[Instrument_Serif] my-10 text-center">
            {{ page.category }}
        </div>
        <div class="text-[36px] font-[Instrument_Serif] my-10 text-center">
            {{ page.description }}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-5">
        {% assign item = site[page.category] | where: "name", "illustration 1" | first %}
        <div class="col-span-2 rounded-3xl bg-[#600000] overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
        {% assign item = site[page.category] | where: "name", "illustration 2" | first %}
        <div class="col-span-2 rounded-3xl bg-[#600000] overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
        {% assign item = site[page.category] | where: "name", "illustration 3" | first %}
        <div class="col-span-1 rounded-3xl bg-[#600000] overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
        {% assign item = site[page.category] | where: "name", "illustration 4" | first %}
        <div class="col-span-1 rounded-3xl overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div>
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
        {% assign item = site[page.category] | where: "name", "illustration 5" | first %}
        <div class="col-span-2 rounded-3xl bg-[#600000] overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
        {% assign item = site[page.category] | where: "name", "illustration 6" | first %}
        <div class="col-span-2 rounded-3xl bg-[#600000] overflow-hidden relative">
            <!-- <a href="{{site.baseurl}}{{ item.url }}">
                <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                    <div class="text-[40px] w-full h-full flex justify-center items-center">
                        {{ item.name }} 
                    </div>
                </div> -->
                <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
            <!-- </a> -->
        </div>
    </div>
{% include footer.html %}
</div>