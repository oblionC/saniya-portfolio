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
    <div class="grid md:grid-cols-2 grid-cols-1 gap-5 lazyload">
    {% if page.order != nil %}
        {% for filename in page.order %}
            {% assign category = page.category | prepend: "_" %}
            {% assign file = filename | prepend: "/" | prepend: category %}
            {% assign item = site[page.category] | where: "path", file | first %}
            {% if item.image != nil %}
                <div class="col-span-1 rounded-3xl bg-[#600000] overflow-hidden relative hover:cursor-pointer">
                    <a href="{{site.baseurl}}{{ item.url }}">
                        <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                            <div class="text-[40px] w-full h-full flex justify-center items-center">
                                {{ item.name }} 
                            </div>
                        </div>
                        <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
                    </a>
                </div>
            {% else %}
                {% assign animation = site["animations"] | where: "name", item.animation | first %}
                {{ animation.content }}
            {% endif %}
        {% endfor %}  
    {% else %}
        {% for item in site[page.category] %}
            <div class="col-span-1 rounded-3xl bg-white overflow-hidden relative hover:cursor-pointer">
                <a href="{{site.baseurl}}{{ item.url }}">
                    <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
                        <div class="text-[40px] w-full h-full flex justify-center items-center">
                            {{ item.name }} 
                        </div>
                    </div>
                    <img class="w-full h-full object-scale-down" src="{{site.baseurl}}{{ item.image }}" />
                </a>
            </div>
        {% endfor %}
    {% endif %}
</div>
{% include footer.html %}