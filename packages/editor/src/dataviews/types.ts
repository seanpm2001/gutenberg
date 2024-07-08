type PostStatus =
	| 'published'
	| 'draft'
	| 'pending'
	| 'private'
	| 'future'
	| 'auto-draft'
	| 'trash';

export interface BasePost {
	status?: PostStatus;
	title: string | { rendered: string } | { raw: string };
	type: string;
	id: string | number;
}

export interface Template extends BasePost {
	type: 'wp_template';
	is_custom: boolean;
	source: string;
	has_theme_file: boolean;
	id: string;
}

export interface TemplatePart extends BasePost {
	type: 'wp_template_part';
	source: string;
	origin: string;
	plugin?: string;
	has_theme_file: boolean;
	id: string;
}

export interface Pattern extends BasePost {
	slug: string;
	title: { raw: string };
	content: { raw: string } | string;
	wp_pattern_sync_status: string;
}

export interface PostWithPageAttributesSupport extends BasePost {
	menu_order: number;
}

export type Post = Template | TemplatePart | Pattern | BasePost;

export type PostWithPermissions = Post & {
	permissions: {
		delete: boolean;
		update: boolean;
	};
};

export interface PostType {
	slug: string;
	supports?: {
		'page-attributes'?: boolean;
		title?: boolean;
	};
}

// Will be unnecessary after typescript 5.0 upgrade.
export type CoreDataError = { message?: string; code?: string };
