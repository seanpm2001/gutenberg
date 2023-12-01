/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';
import { SearchControl } from '@wordpress/components';

export default function MetadataSourceUI( props ) {
	const { setAttributes, setIsActiveAttribute, context } = props;

	// Fetching the REST API to get the available custom fields.
	// TODO: Review if it works with taxonomies.
	const data = useSelect(
		( select ) => {
			const { getEntityRecord } = select( coreStore );
			return getEntityRecord(
				'postType',
				context.postType,
				context.postId
			);
		},
		[ context.postType, context.postId ]
	);
	const metadata = [];
	function addMetadata( array, newData ) {
		Object.entries( newData ).forEach( ( [ key, value ] ) => {
			// Prettifying the name. But I guess it is not necessary.
			// Plugins could provide it somehow.
			const prettyName = key
				.split( '_' )
				.map(
					( word ) => word.charAt( 0 ).toUpperCase() + word.slice( 1 )
				)
				.join( ' ' );
			array.push( {
				name: prettyName,
				key,
				value,
			} );
			return array;
		} );
	}
	addMetadata( metadata, data.meta );

	// TODO: Add filter in case plugins want to add/remove/modify fields.
	// For example, ACF has its own field named "acf". Adding it manually.
	// Other example could be post meta (Post Title) not included in "meta".
	addMetadata( metadata, data.acf );

	const [ selectedField, setSelectedField ] = useState( null );
	// TODO: Try to abstract this function to be reused across all the sources.
	function selectItem( item, props ) {
		const { currentAttribute } = props;
		setSelectedField( item );

		const newAttributes = {};
		// Modify the attribute we are binding.
		// TODO: Not sure if we should do this. We might need to process the bindings attribute somehow in the editor to modify the content with context.
		// TODO: Get the type from the block attribute definition and modify/validate the value returned by the source if needed.
		newAttributes[ currentAttribute ] = item.value;

		// TODO: Review this logic and simplify the code.
		const metadataAttribute = props.attributes.metadata
			? props.attributes.metadata
			: {};
		const bindingsArray = metadataAttribute.bindings
			? metadataAttribute.bindings
			: [];

		// If the attribute exists in the bindings, update it.
		// Otherwise, add it.
		let attributeExists = false;
		bindingsArray.forEach( ( binding ) => {
			if ( binding.attribute === currentAttribute ) {
				binding.source.name = 'metadata';
				binding.source.params.value = item.key;
				attributeExists = true;
			}
		} );
		if ( ! attributeExists ) {
			bindingsArray.push( {
				attribute: currentAttribute,
				source: {
					name: 'metadata',
					params: { value: item.key },
				},
			} );
		}
		metadataAttribute.bindings = bindingsArray;
		newAttributes.metadata = metadataAttribute;
		setAttributes( newAttributes );

		setIsActiveAttribute( false );
	}

	const [ searchInput, setSearchInput ] = useState( '' );

	return (
		<div className="block-bindings-metadata-source-ui">
			{ /* TODO: Implement the Search logic. */ }
			<SearchControl
				label={ __( 'Search metadata' ) }
				value={ searchInput }
				onChange={ setSearchInput }
				size="compact"
			/>
			<ul className="token-metadata-list">
				{ metadata.map( ( item ) => (
					<li
						key={ item.key }
						onClick={ () => selectItem( item, props ) }
						className={
							selectedField?.key === item.key
								? 'selected-meta-field'
								: ''
						}
					>
						{ item.name }
					</li>
				) ) }
			</ul>
		</div>
	);
}
