<script lang="ts">
	import { X, ExternalLink } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	// Datos de los proyectos
	const projects = [
		{
			title: 'PUERTAS Y PORTONES',
			desc: 'Seguridad y elegancia en cada entrada.',
			details: 'Nuestras puertas y portones combinan la robustez del hierro forjado con diseños arquitectónicos que realzan la fachada de tu hogar. Ofrecemos sistemas manuales y automatizados.',
			img: 'https://images.unsplash.com/photo-1599818406263-149021e90d13?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1599818406263-149021e90d13',
				'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
				'https://images.unsplash.com/photo-1620617578298-63cb5355648f',
				'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b',
				'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff'
			]
		},
		{
			title: 'REJAS Y PROTECCIONES',
			desc: 'Diseños que protegen sin sacrificar estilo.',
			details: 'Protege tu hogar sin sacrificar el estilo. Nuestras rejas decorativas ofrecen máxima seguridad con diseños que van desde lo clásico hasta lo contemporáneo.',
			img: 'https://images.unsplash.com/photo-1635322966219-b75ed3a90e2d?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1635322966219-b75ed3a90e2d',
				'https://images.unsplash.com/photo-1497366216548-37526070297c',
				'https://images.unsplash.com/photo-1449824913929-2b3a3e3db8fa',
				'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6',
				'https://images.unsplash.com/photo-1484154218962-a1c002085d2f'
			]
		},
		{
			title: 'BARANDALES Y ESCALERAS',
			desc: 'Estructuras firmes con acabados finos.',
			details: 'Transformamos escaleras y balcones en obras de arte. Nuestros barandales forjados a mano combinan seguridad estructural con delicadeza visual.',
			img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff',
				'https://images.unsplash.com/photo-1522050212171-61b01dd24579',
				'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
				'https://images.unsplash.com/photo-1513694203232-719a280e022f',
				'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6'
			]
		},
		{
			title: 'MOBILIARIO ARTESANAL',
			desc: 'Piezas únicas para interiores industriales.',
			details: 'Muebles únicos que cuentan historias. Desde mesas y sillas hasta lámparas y decoraciones, cada pieza es forjada a mano para durar toda la vida.',
			img: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b',
				'https://images.unsplash.com/photo-1538688535198-9488b7bdd7d6',
				'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
				'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
				'https://images.unsplash.com/photo-1595428774223-ef52624120d2'
			]
		},
		{
			title: 'PROCESO DE FORJA',
			desc: 'El arte del fuego y el martillo en acción.',
			details: 'Conoce el arte detrás de cada creación. Utilizamos técnicas tradicionales combinadas con herramientas modernas para lograr acabados perfectos.',
			img: 'https://images.unsplash.com/photo-1620617578298-63cb5355648f?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1620617578298-63cb5355648f',
				'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
				'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
				'https://images.unsplash.com/photo-1531685250784-756994db931e',
				'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122'
			]
		},
		{
			title: 'DECORACIÓN Y ARTE',
			desc: 'Detalles que transforman espacios.',
			details: 'Piezas decorativas que transforman espacios. Desde esculturas hasta detalles arquitectónicos, creamos puntos focales impresionantes.',
			img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
			subGallery: [
				'https://images.unsplash.com/photo-1513694203232-719a280e022f',
				'https://images.unsplash.com/photo-1513519245088-0e12902e5a38',
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
				'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
				'https://images.unsplash.com/photo-1463797221720-6b07e6426c24'
			]
		}
	];

	let selectedProject: any = null;

	function openModal(project: any) {
		selectedProject = project;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		selectedProject = null;
		document.body.style.overflow = 'auto';
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && selectedProject) {
			closeModal();
		}
	}

    // Función inteligente para cerrar solo si clicas el fondo negro
    function handleBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="galeria" class="py-20 bg-forge-black border-t border-white/5">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
				NUESTRA <span class="text-forge-orange">GALERIA</span>
			</h2>
			<p class="text-forge-muted max-w-2xl mx-auto">
				Explora nuestra colección de trabajos realizados con dedicación y maestría artesanal.
				Haz clic en cada categoría para ver más.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as item}
				<button 
					on:click={() => openModal(item)}
					class="group relative h-80 w-full overflow-hidden rounded-xl cursor-pointer shadow-lg border border-white/10 text-left focus:outline-none focus:ring-2 focus:ring-forge-orange"
				>
					<img 
						src={item.img} 
						alt={item.title} 
						class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
					<div class="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 w-full">
						<h3 class="text-xl font-bold text-white font-serif tracking-wider mb-1 border-l-4 border-forge-orange pl-3">
							{item.title}
						</h3>
						<p class="text-gray-300 text-sm pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
							{item.desc}
						</p>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if selectedProject}
	<div 
        role="button"
        tabindex="0"
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm focus:outline-none"
		transition:fade={{ duration: 200 }}
		on:click={handleBackdropClick}
        on:keydown={(e) => { if(e.key === 'Enter') closeModal() }}
	>
		<div 
			class="bg-[#1a1a1a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-white/10 relative flex flex-col cursor-auto"
			transition:fly={{ y: 20, duration: 300 }}
		>
			<button 
				on:click={closeModal}
				class="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-forge-orange text-white rounded-full transition-colors"
			>
				<X class="w-6 h-6" />
			</button>

			<div class="p-8 pb-4">
				<h3 class="text-3xl md:text-4xl font-serif text-white mb-4 border-b border-white/10 pb-4">
					{selectedProject.title}
				</h3>
				<p class="text-gray-300 leading-relaxed text-lg">
					{selectedProject.details}
				</p>
			</div>

			<div class="p-8 pt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
				{#each selectedProject.subGallery as subImg, i}
					<div class="relative overflow-hidden rounded-lg aspect-square {i === 0 ? 'col-span-2 row-span-2' : 'col-span-1'}">
						<img 
							src={`${subImg}?q=80&w=600&auto=format&fit=crop`} 
							alt="Detalle de proyecto" 
							class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				{/each}
			</div>

			<div class="p-6 bg-black/30 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 backdrop-blur-md">
				<p class="text-forge-muted text-sm text-center sm:text-left">
					¿Te interesa este tipo de trabajo? Contáctanos para una cotización personalizada.
				</p>
				<a 
					href="https://wa.me/5493573123456" 
					target="_blank"
					class="bg-forge-orange hover:bg-forge-orange-hover text-white px-6 py-3 rounded font-bold flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap"
				>
					<ExternalLink class="w-4 h-4" />
					Contactar Ahora
				</a>
			</div>
		</div>
	</div>
{/if}