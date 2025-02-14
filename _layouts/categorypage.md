---
layout: base
---
<div class="max-w-screen md:px-20 px-5 text-white font-[Instrument_Serif] my-20">
    <div class="w-2/3">
        <div class="text-[96px] font-[Instrument_Serif] my-10">
            {{ page.category }}
        </div>
        <div class="text-[36px] font-[Instrument_Serif] my-10">
            {{ page.description }}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-5">
    {% for collection in site.collections %}
        {% if collection.label == page.category %}
            {% for item in site[collection.label] %}
            <div class="col-span-1 rounded-3xl bg-[#600000] overflow-hidden relative hover:cursor-pointer">
                <a href="{{site.baseurl}}{{ item.url }}">
                    <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                        <div class="text-[40px] w-full h-full flex justify-center items-center">
                            {{ item.name }} 
                        </div>
                    </div>
                    <img class="w-full h-full object-fit" src="{{site.baseurl}}{{ item.image }}" />
                </a>
            </div>
            {% endfor %}
        {% endif %}
    {% endfor %}  
</div>
{% include footer.html %}