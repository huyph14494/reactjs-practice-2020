import React from 'react';
import useMagicColor from 'src/hooks/useMagicColor';

export default function MagicColor() {
  let { color } = useMagicColor('white');

	return (
		<section className={"container"}>
      <div className='mt-5 mb-5'
				style={{
					width: '150px',
					height: '150px',
					backgroundColor: color,
          transition: 'all 0.35s ease-in-out 0s',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
				}}
			/>
		</section>
	);
}
