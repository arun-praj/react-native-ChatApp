<View style={styles.containers}>
  <View style={{paddingTop: 50, paddingHorizontal: 14}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'white', fontSize: 26}}> Welcome Back</Text>
        <Text style={{color: 'white', fontSize: 26}}>Roshan Don</Text>
      </View>
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          }}
          style={styles.ProfileImage}
        />
      </View>
    </View>
    <View>
      <Carousel
        layout={'tinder'}
        ref={CarouselRef}
        data={Images}
        renderItem={RenderItem}
        sliderWidth={width}
        itemWidth={width - 10}
        swipeThreshold={10000}
        layoutCardOffset={-12}
        inactiveSlideOpacity={0.4}
        containerCustomStyle={{
          overflow: 'visible',
          marginVertical: 30,
        }}
        contentContainerCustomStyle={{
          paddingTop: 14,
        }}
      />
    </View>
    <View>
      <Text style={{color: '#fff', opacity: 0.5, marginBottom: 10}}>
        Send Money
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.AddUser}>
          <View styles={styles.AddUserIconbg}>
            <Button title="Add" color="white" />
          </View>
        </TouchableOpacity>

        <FlatList
          inverted
          horizontal
          data={Users}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => {
            return (
              <View style={styles.AddUser} key={item.id}>
                <Image
                  style={styles.AddUserIconbg}
                  source={{
                    uri: item.userImage,
                  }}
                />
                <Text style={{color: '#fff'}}>{item.userName}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  </View>

  <View style={{flex: 1}}>
    <SlidingUpPanel
      ref={ModalRef}
      draggableRange={{top: height - 120, bottom: height * 0.08}}
      // dragableRange={dragRange}
      animatedValue={_draggedValue}
      backdropOpacity={0}
      snappingPoints={[height - 120, 10, 60, 100, height * 0.08]}
      height={height + 60}
      friction={0.9}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#0c0c0c',
          borderRadius: 24,
          padding: 14,
        }}>
        <View style={styles.PanelHandle}></View>
        <View>
          <Text style={{marginVertical: 16, color: '#fff'}}>
            Recent Transactions
          </Text>
        </View>
        <View style={{height: 500, paddingBottom: 10}}>
          <FlatList
            data={Users}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => {
              return (
                <View style={styles.PanelItemContainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View styles={{marginRight: 10}}>
                      <Image
                        source={{uri: item.userImage}}
                        style={styles.PanelImage}
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text style={styles.text}>{item.userName}</Text>
                      <Text style={{opacity: 0.8, color: '#fff', fontSize: 10}}>
                        {item.transactionDate}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#fff',
                        marginHorizontal: 2,
                      }}>
                      {item.amount}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SlidingUpPanel>
  </View>
</View>;
