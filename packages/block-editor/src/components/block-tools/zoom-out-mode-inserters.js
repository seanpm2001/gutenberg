/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
<<<<<<< HEAD
import { useEffect, useState } from '@wordpress/element';
=======
import { useEffect, useRef, useState } from '@wordpress/element';
>>>>>>> a728b0d993 (create a function to check when we can add the separators)

/**
 * Internal dependencies
 */
import BlockPopoverInbetween from '../block-popover/inbetween';
import ZoomOutModeInserterButton from './zoom-out-mode-inserter-button';
import { store as blockEditorStore } from '../../store';
import { unlock } from '../../lock-unlock';

function ZoomOutModeInserters() {
	const [ isReady, setIsReady ] = useState( false );
	const {
		hasSelection,
		blockInsertionPoint,
		blockOrder,
<<<<<<< HEAD
		blockInsertionPointVisible,
=======
		blockInsertionPoint,
>>>>>>> a728b0d993 (create a function to check when we can add the separators)
		setInserterIsOpened,
		sectionRootClientId,
		selectedBlockClientId,
		hoveredBlockClientId,
	} = useSelect( ( select ) => {
		const {
			getSettings,
			getBlockInsertionPoint,
			getBlockOrder,
			getSelectionStart,
			getSelectedBlockClientId,
			getHoveredBlockClientId,
<<<<<<< HEAD
			isBlockInsertionPointVisible,
=======
			getBlockInsertionPoint,
>>>>>>> a728b0d993 (create a function to check when we can add the separators)
		} = select( blockEditorStore );
		const { sectionRootClientId: root } = unlock( getSettings() );
		return {
			hasSelection: !! getSelectionStart().clientId,
			blockInsertionPoint: getBlockInsertionPoint(),
			blockOrder: getBlockOrder( root ),
<<<<<<< HEAD
			blockInsertionPointVisible: isBlockInsertionPointVisible(),
=======
			blockInsertionPoint: getBlockInsertionPoint(),
>>>>>>> a728b0d993 (create a function to check when we can add the separators)
			sectionRootClientId: root,
			setInserterIsOpened:
				getSettings().__experimentalSetIsInserterOpened,
			selectedBlockClientId: getSelectedBlockClientId(),
			hoveredBlockClientId: getHoveredBlockClientId(),
		};
	}, [] );
<<<<<<< HEAD

	const { showInsertionPoint } = useDispatch( blockEditorStore );
=======
	const dispatch = useDispatch( blockEditorStore );
	const isMounted = useRef( false );

	useEffect( () => {
		if ( ! isMounted.current ) {
			isMounted.current = true;
			return;
		}
		// reset insertion point when the block order changes
		setInserterIsOpened( true );
	}, [ blockOrder, setInserterIsOpened ] );
>>>>>>> a728b0d993 (create a function to check when we can add the separators)

	// Defer the initial rendering to avoid the jumps due to the animation.
	useEffect( () => {
		const timeout = setTimeout( () => {
			setIsReady( true );
		}, 500 );
		return () => {
			clearTimeout( timeout );
		};
	}, [] );

	if ( ! isReady ) {
		return null;
	}

	return [ undefined, ...blockOrder ].map( ( clientId, index ) => {
		const shouldRenderInsertionPoint =
			blockInsertionPointVisible && blockInsertionPoint.index === index;

		const previousClientId = clientId;
		const nextClientId = blockOrder[ index ];

		const isSelected =
			hasSelection &&
			( selectedBlockClientId === previousClientId ||
				selectedBlockClientId === nextClientId );

		const isHovered =
			hoveredBlockClientId === previousClientId ||
			hoveredBlockClientId === nextClientId;

		const { showInsertionPoint } = unlock( dispatch );
		return (
			<BlockPopoverInbetween
				key={ index }
				previousClientId={ previousClientId }
				nextClientId={ nextClientId }
			>
				{ shouldRenderInsertionPoint && (
					<div
						style={ {
							borderRadius: '0',
							height: '12px',
							opacity: 1,
							transform: 'translateY(-50%)',
							width: '100%',
						} }
						className="block-editor-block-list__insertion-point-indicator"
					/>
				) }

				{ ! shouldRenderInsertionPoint && (
					<ZoomOutModeInserterButton
						isVisible={ isSelected || isHovered }
						onClick={ () => {
							setInserterIsOpened( {
								rootClientId: sectionRootClientId,
								insertionIndex: index,
								tab: 'patterns',
								category: 'all',
							} );
							showInsertionPoint( sectionRootClientId, index, {
								operation: 'insert',
							} );
						} }
					/>
				) }
			</BlockPopoverInbetween>
		);
	} );
}

export default ZoomOutModeInserters;
