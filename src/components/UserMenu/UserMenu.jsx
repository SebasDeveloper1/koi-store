import React from 'react';
import { PrimaryLink } from '@components/PrimaryLink/PrimaryLink';
import './UserMenu.scss';

export function UserMenu(props) {
  const {
    itemsList,
    modifierClassList,
    modifierClassItemList,
    modifierClassItem,
  } = props;
  return (
    <ul
      className={
        modifierClassList
          ? `user-menu__list ${modifierClassList}`
          : `user-menu__list`
      }
    >
      {Object.entries(itemsList).map(([itemId, infoItem]) => (
        <li
          className={`user-menu__list-item ${modifierClassItemList}`}
          key={`user-menu__${itemId}`}
        >
          <PrimaryLink
            href={infoItem.itemHref}
            textLink={infoItem.itemName}
            modifierClass={
              infoItem.itemStatus
                ? `user-menu__list-link ${modifierClassItem} user-menu__list-link--active`
                : `user-menu__list-link ${modifierClassItem}`
            }
          />
        </li>
      ))}
    </ul>
  );
}
