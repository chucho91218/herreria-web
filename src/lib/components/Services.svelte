<script lang="ts">
	import { Hammer, Wrench, Settings } from 'lucide-svelte';
	import { reveal } from '$lib/actions/reveal';

	// ESTE ES EL ARRAY QUE FALTABA
	const services = [
		{
			title: 'PUERTAS Y PORTONES',
			desc: 'Diseños exclusivos de puertas y portones en hierro forjado que combinan seguridad con elegancia arquitectónica.',
			icon: Hammer
		},
		{
			title: 'REJAS Y BARANDALES',
			desc: 'Protección y belleza para tu hogar con rejas decorativas y barandales que realzan cualquier espacio.',
			icon: Wrench
		},
		{
			title: 'MOBILIARIO ARTESANAL',
			desc: 'Muebles únicos forjados a mano: mesas, sillas, lámparas y decoraciones que transforman ambientes.',
			icon: Settings
		}
	];
</script>

<section id="servicios" class="py-20 bg-forge-black relative z-10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="text-center mb-16" use:reveal>
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
				NUESTROS <span class="text-forge-orange">SERVICIOS</span>
			</h2>
			<p class="text-forge-muted max-w-2xl mx-auto text-lg">
				Ofrecemos soluciones integrales en herrería artesanal, desde el diseño hasta la instalación final.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each services as service, i}
				<div 
					use:reveal={{ delay: i * 200 }} 
					class="group bg-[#1a1a1a] border border-white/10 p-8 rounded-lg hover:border-forge-orange transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
				>
					<div class="bg-white/5 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-forge-orange group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.5)]">
						<svelte:component this={service.icon} class="w-7 h-7 text-forge-orange group-hover:text-white transition-colors" />
					</div>

					<h3 class="text-xl font-bold text-white mb-3 font-serif tracking-wide">
						{service.title}
					</h3>
					<p class="text-forge-muted leading-relaxed text-sm">
						{service.desc}
					</p>
				</div>
			{/each}
		</div>

	</div>
</section>