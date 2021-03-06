import React, { useEffect, useContext } from "react"
import { Icon, Menu } from "semantic-ui-react"
import { IChannel } from '../../models/channels'
import ChannelItem from "./ChannelItem"
import ChannelForm from "./ChannelForm"
import { observer } from 'mobx-react-lite'
import { RootStoreContext } from "../../stores/rootStore"

const Channels = () => {
    const rootStore = useContext(RootStoreContext)
    const { channelsMobx, loadChannels, setModalVisible, setActiveChannel, getCurrentChannel } = rootStore.channelStore
    const { loadMessages } = rootStore.messageStore

    useEffect(() => {
        loadChannels()
    }, [loadChannels, setActiveChannel])

    const changeChannel = (channel: IChannel) => {
        setActiveChannel(channel)
        loadMessages(getCurrentChannel()?.id!)
    }

    const displayChannels = (channels: IChannel[]) => {
        return (
            channels.length > 0 &&
            channels.map((channel) => {
                const { id } = channel;
                return (
                    <ChannelItem key={id} channel={channel} changeChannel={changeChannel} />
                )
            })
        )
    }

    return (
        <React.Fragment>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> CHANNELS
                    </span>{' '}
                    ({channelsMobx.length}) <Icon name="add" onClick={() => setModalVisible(true)} style={{ cursor: 'pointer' }} />
                </Menu.Item>
                {displayChannels(channelsMobx)}
            </Menu.Menu>
            <ChannelForm />
        </React.Fragment>
    )
}

export default observer(Channels)