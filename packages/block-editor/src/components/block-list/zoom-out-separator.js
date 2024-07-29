/**
 * WordPress dependencies
 */
import {
	__unstableMotion as motion,
	__unstableAnimatePresence as AnimatePresence,
} from '@wordpress/components';
import { useReducedMotion } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';
import { unlock } from '../../lock-unlock';

export function ZoomOutSeparator( {
	clientId,
	rootClientId,
	position = 'top',
} ) {
	const {
		isZoomOut,
		sectionRootClientId,
		sectionClientIds,
		blockInsertionPoint,
		blockInsertionPointVisible,
	} = useSelect( ( select ) => {
		const {
			getSettings,
			__unstableGetEditorMode,
			getBlockInsertionPoint,
			getBlockOrder,
			isBlockInsertionPointVisible,
		} = unlock( select( blockEditorStore ) );

		if ( __unstableGetEditorMode() === 'zoom-out' ) {
			const { sectionRootClientId: root } = unlock( getSettings() );
			const sectionRootClientIds = getBlockOrder( root );
			return {
				isZoomOut: __unstableGetEditorMode() === 'zoom-out',
				sectionRootClientId: root,
				sectionClientIds: sectionRootClientIds,
				blockOrder: getBlockOrder( root ),
				blockInsertionPoint: getBlockInsertionPoint(),
				blockInsertionPointVisible: isBlockInsertionPointVisible(),
			};
		}
		return {};
	}, [] );

	const isReducedMotion = useReducedMotion();
	if ( ! isZoomOut || ! clientId ) {
		return;
	}

	let isSectionBlock = false;
	let isVisible = false;

	if (
		( sectionRootClientId &&
			sectionClientIds &&
			sectionClientIds.includes( clientId ) ) ||
		( clientId && ! rootClientId )
	) {
		isSectionBlock = true;
	}

	if ( ! isSectionBlock ) {
		return null;
	}

	if ( position === 'top' ) {
		isVisible =
			blockInsertionPointVisible &&
			blockInsertionPoint.index === 0 &&
			clientId === sectionClientIds[ blockInsertionPoint.index ];
	}

	if ( position === 'bottom' ) {
		isVisible =
			blockInsertionPointVisible &&
			clientId === sectionClientIds[ blockInsertionPoint.index - 1 ];
	}

	return (
		<AnimatePresence>
			{ isVisible && (
				<motion.div
					layout={ ! isReducedMotion }
					initial={ { height: 0 } }
					animate={ { height: '20vh' } }
					exit={ { height: 0 } }
					transition={ {
						duration: 0.25,
						ease: 'easeInOut',
					} }
					className="block-editor-block-list__zoom-out-separator"
				></motion.div>
			) }
		</AnimatePresence>
	);
}
