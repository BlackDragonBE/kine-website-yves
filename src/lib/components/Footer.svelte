<footer>
	<div class="inner">
		<div class="brand">
			<img src="/mark-white.svg" alt="" class="mark" />
			<span class="name">KINE DEMOL</span>
		</div>
		<span class="copy">© {new Date().getFullYear()} Yves Demol · Alle rechten voorbehouden</span>
	</div>
</footer>

<style>
	footer {
		background: #1c2b38;
		color: #8fa3b3;
	}

	.inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 40px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 18px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.mark {
		height: 34px;
		width: auto;
		opacity: 0.9;
	}

	.name {
		font-weight: 700;
		font-size: 16px;
		letter-spacing: 0.04em;
		color: #dce6ee;
	}

	.copy {
		font-size: 13px;
	}
</style>
