---
name: lifafa_animation
---
{% assign item = site.typography | where: "name", "lifafa(envelope)" | first %}
<div class="col-span-1 rounded-3xl overflow-hidden relative hover:cursor-pointer">
    <a href="{{site.baseurl}}{{item.url}}">
        <div class="lifafa-bg-gradient w-full h-full absolute"></div>
        <img class="w-full h-full object-scale-down absolute" src="{{site.baseurl}}assets/images/typography/lifafa_gradient_type-37.png" />
        <div class="bg-black transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-85 absolute w-full h-full">
            <div class="text-[40px] w-full h-full flex justify-center items-center">
                {{ item.name }}
            </div>
        </div>
    </a>
</div>