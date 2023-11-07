import * as Tabs from '@radix-ui/react-tabs';
import s from './TabSwitcher.module.scss'

export const TabSwitcher = () => {
  const arr = [
    {value: 'tab1', name: 'Switcher1', p: 'Make changes to your account here. Click save when you\'re done.'},
    {value: 'tab2', name: 'Switcher2', p: 'Nice to meet you'},
    {value: 'tab3', name: 'Switcher3', p: 'Ooooh'},
    {value: 'tab4', name: 'Switcher4', p: 'Sexy'},
    {value: 'tab5', name: 'Switcher5', p: 'XXX 18+ very warm!'},
  ]


  return (
    <Tabs.Root className={s.container} defaultValue={'tab1'} >
      <Tabs.List>
        {arr.map(el =>
          <Tabs.Trigger className={s.blockTab} value={el.value}>
            {el.name}
          </Tabs.Trigger>
        )}
      </Tabs.List>
      {arr.map(el =>
        <Tabs.Content value={el.value}>
          <p className="Text">{el.p}</p>
        </Tabs.Content>
      )}
    </Tabs.Root>
  );
};

