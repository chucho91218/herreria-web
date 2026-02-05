<script lang="ts">
	import { Phone, Mail, MapPin } from 'lucide-svelte';
</script>

<section id="contacto" class="py-20 bg-forge-black relative border-t border-white/5">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
				<span class="text-forge-orange">Contáctanos</span>
			</h2>
			<p class="text-forge-muted text-lg max-w-2xl mx-auto">
				Estamos listos para hacer realidad tu proyecto. Solicita una cotización sin compromiso.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
			
			<div class="bg-[#151515] border border-white/10 rounded-lg p-10 text-center hover:border-forge-orange transition-colors group">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forge-orange/10 text-forge-orange mb-6 group-hover:bg-forge-orange group-hover:text-white transition-all">
					<Phone class="w-6 h-6" />
				</div>
				<h3 class="text-white font-bold uppercase tracking-wider mb-2">Teléfono</h3>
				<p class="text-forge-muted">+54 9 3573 12-3456</p> </div>

			<div class="bg-[#151515] border border-white/10 rounded-lg p-10 text-center hover:border-forge-orange transition-colors group">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forge-orange/10 text-forge-orange mb-6 group-hover:bg-forge-orange group-hover:text-white transition-all">
					<Mail class="w-6 h-6" />
				</div>
				<h3 class="text-white font-bold uppercase tracking-wider mb-2">Email</h3>
				<p class="text-forge-muted">contacto@forjamaestra.com</p>
			</div>

			<div class="bg-[#151515] border border-white/10 rounded-lg p-10 text-center hover:border-forge-orange transition-colors group">
				<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forge-orange/10 text-forge-orange mb-6 group-hover:bg-forge-orange group-hover:text-white transition-all">
					<MapPin class="w-6 h-6" />
				</div>
				<h3 class="text-white font-bold uppercase tracking-wider mb-2">Ubicación</h3>
				<p class="text-forge-muted">Villa del Rosario, Córdoba</p>
			</div>

		</div>
	</div>
</section>