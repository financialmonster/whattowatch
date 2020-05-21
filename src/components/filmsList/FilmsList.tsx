import React, { FC } from 'react';
import { List, Map } from 'immutable';

import { Film } from 'components/film/Film';

type TFilmsListProps = {
    films: List<Map<string, any>> | undefined
}

export const FilmsList: FC<TFilmsListProps> = React.memo(({ films }) => {
    const filmsJSX: List<JSX.Element> =
        (films as List<Map<string, any>>).map((film) => <Film key={film.get(`id`)} film={film} />);

    return (
        <div className="catalog__movies-list">
            {filmsJSX}
        </div>
    );
});
