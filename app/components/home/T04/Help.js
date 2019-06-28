import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/SimpleLineIcons';
import { red, bold } from 'ansi-colors';
export default class accout extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <Icon style={{}} name="md-arrow-back" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Iconss style={{}} name="share-alt" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={{ alignSelf: 'center', fontSize: 15, paddingTop: 50 }}>
                            ĐIỀU KHOẢN SỬ DỤNG
                        </Text>
                        <Text style={{ alignSelf: 'center', fontSize: 18, paddingTop: 20, paddingBottom: 50, fontWeight: 'bold' }}>
                            THE COFFEE HOUSE DELIVERY
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Quy định về phạm vi giao hàng
                        </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10, }}>
                            Điểm nhận hàng không quá 5 km so với cửa hàng gần nhất, để đảm bảo chất lượng nước (*) Nếu khoảng cách xa hơn thì phải có sự đồng ý của khách khi xác nhận đơn hàng.
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Quy định về phí giao hàng
                        </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10, }}>
                            Đơn hàng trên 50.000VND miễn phi giao hàng
                            Đơn hàng dưới 50.000VND cộng 10.000VND phí vận chuyển
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Quy định về địa điểm giao hàng
                        </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10, }}>
                            Nếu địa điểm giao hàng là Trường học, Bệnh viện quý khách vui lòng hoàn thành việc thanh toán trực tuyến trước.
                            Đơn hàng sẽ được hủy nếu quý khách không cung cấp chính xác địa chỉ giao hàng.
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Quy định về thời gian giao hàng
                        </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10, }}>
                            Thời gian hoạt động giao hàng: The Coffee House cam kết giao hàng trong vòng 30 phút từ khi xác nhận đơn hàng.
                            Đối với các khu vực hơn 5km có xác nhận đồng ý của khách hàng về thời gian giao hàng hơn 30 phút, và đồng thuận về việc không đảm bảo chất lượng sản phẩm tốt nhất.
                            Quy định khung giờ giao hàng: 7:00 - 20:30 mỗi ngày
                            Khi hàng được chuyển giao đến quý khách vui lòng hoàn tất việc thanh toán với nhân viên giao hàng, sau đó quý khách vui lòng kiểm tra nếu sản phẩm có bất kì lỗi hay khiếm khuyết nào. Xin quý khách vui lòng gọi tổng đài theo số 1800 6936 để được hỗ trợ.
                            Lưu ý: Đơn hàng sẽ tự động hủy nếu nhân viên giao nhận không liên lạc được với Khách hàng tại thời điểm giao hàng ( tối đa 3 cuộc gọi và mỗi lần cách nhau 5 phút)
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Hình thức thanh toán
                        </Text>
                        <Text style={{ fontSize: 12, paddingBottom: 10, }}>
                            COD (cash on delivery): thanh toán khi giao hàng
                            Thanh toán trực tuyến bằng thẻ nội địa (ATM)
                            Thanh toán trực tuyến bằng thẻ quốc tế (Visa, master…)
                        </Text>
                        <Text style={{ fontSize: 13, paddingBottom: 10, fontWeight: 'bold' }}>
                            Chính sách đổi/ trả hàng và hoàn tiền
                        </Text>
                        <Text>
                            Sau khi gửi xác nhận đơn hàng, vui lòng làm theo những hướng dẫn sau đây nếu bạn muốn HỦY ĐƠN HÀNG.
                            Nếu bạn chọn Giao Hàng:
                            - Giao hàng ngay: Gọi 1800 6936 để hủy đơn hàng ngay lập tức.
                            - Giao hàng theo thời gian đã chọn: Gọi 18006936 để hủy đơn hàng 30 phút trước khi đơn hàng của bạn được giao.
                            - Đến mang về ngay: Gọi 1800 6936 để hủy đơn hàng ngay lập tức.
                            - Đến mang về theo thời gian đã chọn: Gọi 1800 6936 để hủy đơn hàng 20 phút trước khi đơn hàng của bạn được giao.
                            (*) Cách duy nhất để khách hàng hủy đơn hàng là gọi về 1800 6936.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        height: 50,
        borderBottomWidth: 1,
    },
    content: {
        backgroundColor: '#fafafa',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    content_groud_item: {
        borderBottomWidth: 1,
        borderColor: '#ababab',
        paddingHorizontal: 20,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})
