<script lang="ts">
	import classNames from 'classnames';
</script>

<div
	class={$$restProps['class'] +
		'rounded-md relative p-3 bg-white shadow-md border-1 border-gray-50 transition duration-200'}
>
	<slot />
</div>
